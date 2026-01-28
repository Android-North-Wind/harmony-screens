import { BackHandler, Platform } from "react-native";

export const isSearchBarAvailableForCurrentPlatform = [
  "ios",
  "android",
  "harmony",
].includes(Platform.OS);

export function executeNativeBackPress() {
  // This function invokes the native back press event
  BackHandler.exitApp();
  return true;
}

/**
 * Convert React Native asset:// URI to Harmony-compatible path
 * For Harmony platform, we need to convert asset:// paths to paths
 * that can be used by Harmony's Image component
 * 
 * Harmony Image component supports:
 * 1. Network URLs (http:// or https://)
 * 2. Absolute file paths (starting with /)
 * 3. Resource names (for resources in app bundle)
 * 4. Base64 data URIs (data:image/...)
 * 
 * For asset:// paths, we try to extract a usable path format.
 * Since Harmony may have assets copied to files directory, we return
 * a simplified relative path that might work.
 */
export function convertAssetUriForHarmony(uri: string | undefined): string | undefined {
  if (!uri || uri === "") {
    return undefined;
  }

  // If it's already a file path (starts with /), return as is
  if (uri.startsWith('/')) {
    return uri;
  }

  // If it's a network URL (http:// or https://), return as is
  if (uri.startsWith('http://') || uri.startsWith('https://')) {
    return uri;
  }

  // If it's a base64 data URI, return as is
  if (uri.startsWith('data:')) {
    return uri;
  }

  // If it's asset:// path, convert it
  if (uri.startsWith('asset://')) {
    // Extract the path after asset://
    // asset://rn-tester/examples/react-native-harmony-screens/src/assets/tab-2.png
    // -> examples/react-native-harmony-screens/src/assets/tab-2.png
    const assetPath = uri.replace('asset://', '');
    const pathParts = assetPath.split('/');

    if (pathParts.length > 1) {
      // Remove the app name (first part, e.g., "rn-tester")
      const relativePath = pathParts.slice(1).join('/');
      const fileName = pathParts[pathParts.length - 1];

      // Try to simplify the path by removing common prefixes
      // Remove "examples/app-name/" prefix if exists
      let simplifiedPath = relativePath;
      if (relativePath.startsWith('examples/')) {
        const parts = relativePath.split('/');
        if (parts.length > 2) {
          // Remove "examples/app-name/" prefix
          simplifiedPath = parts.slice(2).join('/');
        }
      }

      // Remove "src/" prefix if exists (common in React Native projects)
      if (simplifiedPath.startsWith('src/')) {
        simplifiedPath = simplifiedPath.replace(/^src\//, '');
      }

      // Remove "assets/" prefix if exists
      if (simplifiedPath.startsWith('assets/')) {
        simplifiedPath = simplifiedPath.replace(/^assets\//, '');
      }

      // For Harmony, we'll try the simplified path first
      // If that doesn't work, Harmony Image component will call onError
      // and we can fallback to filename or other strategies
      return simplifiedPath || fileName;
    }

    // Fallback: return just the filename
    return pathParts[pathParts.length - 1];
  }

  // Return as is if we can't convert it
  return uri;
}

/**
 * Exposes information useful for downstream navigation library implementers,
 * so they can keep reasonable backward compatibility, if desired.
 *
 * We don't mean for this object to only grow in number of fields, however at the same time
 * we won't be very hasty to reduce it. Expect gradual changes.
 */
export const compatibilityFlags = {
  /**
   * Because of a bug introduced in https://github.com/software-mansion/react-native-screens/pull/1646
   * react-native-screens v3.21 changed how header's backTitle handles whitespace strings in https://github.com/software-mansion/react-native-screens/pull/1726
   * To allow for backwards compatibility in @react-navigation/native-stack we need a way to check if this version or newer is used.
   * See https://github.com/react-navigation/react-navigation/pull/11423 for more context.
   */
  isNewBackTitleImplementation: true,

  /**
   * With version 4.0.0 the header implementation has been changed. To allow for backward compat
   * with native-stack@v6 we want to expose a way to check whether the new implementation
   * is in use or not.
   *
   * See:
   * * https://github.com/software-mansion/react-native-screens/pull/2325
   * * https://github.com/react-navigation/react-navigation/pull/12125
   */
  usesHeaderFlexboxImplementation: true,
};
