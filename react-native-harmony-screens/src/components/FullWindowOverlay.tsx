import React, { PropsWithChildren, ReactNode } from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';

// Native components
import FullWindowOverlayNativeComponent from '../specs/FullWindowOverlayNativeComponent';
import type { NativeProps } from '../specs/FullWindowOverlayNativeComponent';
import { isNativePlatformSupported } from '../core';

const NativeFullWindowOverlay: React.ComponentType<
  PropsWithChildren<{
    style: StyleProp<ViewStyle>;
  }> &
    NativeProps
> = FullWindowOverlayNativeComponent as any;

type FullWindowOverlayProps = {
  children: ReactNode;
  unstable_accessibilityContainerViewIsModal?: boolean;
};

function FullWindowOverlay(props: FullWindowOverlayProps) {
  const { width, height } = useWindowDimensions();
  
  // On iOS and Harmony, use native component
  if (
    (Platform.OS === 'ios' || (Platform.OS as string) === 'harmony') &&
    isNativePlatformSupported
  ) {
    return (
      <NativeFullWindowOverlay
        style={[StyleSheet.absoluteFill, { width, height }]}
        accessibilityContainerViewIsModal={
          props.unstable_accessibilityContainerViewIsModal
        }>
        {props.children}
      </NativeFullWindowOverlay>
    );
  }
  
  // On other platforms, show warning and return View
  if (Platform.OS !== 'ios' && (Platform.OS as string) !== 'harmony') {
    console.warn('Using FullWindowOverlay is only valid on iOS and Harmony devices.');
  }
  
  return <View {...props} />;
}

export default FullWindowOverlay;