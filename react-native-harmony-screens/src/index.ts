// Side effects import declaration to ensure our TurboModule
// is loaded.
import 'react-native-screens/src/fabric/NativeScreensModule';
export * from "react-native-screens/src/types";

/*
 * Core
 */
export {
  enableScreens,
  enableFreeze,
  screensEnabled,
  freezeEnabled,
} from "./core";

/*
 * RNS Components
 */
export {
  default as Screen,
  InnerScreen,
  ScreenContext,
} from "./components/Screen";

export {
  ScreenStackHeaderConfig,
  ScreenStackHeaderSubview,
  ScreenStackHeaderLeftView,
  ScreenStackHeaderCenterView,
  ScreenStackHeaderRightView,
  ScreenStackHeaderBackButtonImage,
  ScreenStackHeaderSearchBarView,
} from "react-native-screens/src/components/ScreenStackHeaderConfig";

export { default as SearchBar } from 'react-native-screens/src/components/SearchBar';
export { default as ScreenContainer } from 'react-native-screens/src/components/ScreenContainer';
export { default as ScreenStack } from './components/ScreenStack';
export { default as ScreenStackItem } from './components/ScreenStackItem';
export { default as FullWindowOverlay } from "./components/FullWindowOverlay";
export { default as ScreenFooter } from './components/ScreenFooter';
export { default as BottomTabs } from './components/bottom-tabs/BottomTabs';
export { default as BottomTabsScreen } from './components/bottom-tabs/BottomTabsScreen';
export { default as StackScreen, StackScreenLifecycleState } from './components/gamma/stack/StackScreen';
export { default as SplitViewHost } from './components/gamma/split-view/SplitViewHost';
export { default as SplitViewScreen } from './components/gamma/split-view/SplitViewScreen';
export { default as ScreenStackHost } from './components/gamma/stack/ScreenStackHost';
export { default as ScreenContentWrapper } from './components/ScreenContentWrapper';

/*
 * Utils
 */
export {
  isSearchBarAvailableForCurrentPlatform,
  compatibilityFlags,
  executeNativeBackPress,
} from "./utils";

/**
 * Hooks
 */
export { default as useTransitionProgress } from "react-native-screens/src/useTransitionProgress";

export { default as GestureDetectorProvider } from './gesture-handler/GestureDetectorProvider';
