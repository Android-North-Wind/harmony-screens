// Implementation adapted from `react-native-safe-area-context`:
// https://github.com/AppAndFlow/react-native-safe-area-context/blob/v5.6.1/src/SafeAreaView.tsx
'use client';

import React from 'react';
import { SafeAreaViewProps, NativeStatusBarHeightChangeEvent, NativeNavigationBarHeightChangeEvent } from './SafeAreaView.types';
import SafeAreaViewNativeComponent, {
  NativeProps as SafeAreaViewNativeComponentProps,  
} from '../../specs/SafeAreaViewNativeComponent';
import { StyleSheet, NativeSyntheticEvent } from 'react-native';

function SafeAreaView(props: SafeAreaViewProps) {
  const [statusBarHeight, setStatusBarHeight] = React.useState(0);
  const onStatusBarHeightChangeCallback = (
    event: NativeSyntheticEvent<NativeStatusBarHeightChangeEvent>
  ) => {
    console.log('SafeAreaView StatusBar height changed:', event.nativeEvent.statusBarHeight);
    setStatusBarHeight(event.nativeEvent.statusBarHeight);
    if (typeof props.onStatusBarHeightChange === "function") {
      props.onStatusBarHeightChange?.(event);
    }
  };
  
  const [navigationBarHeight, setNavigationBarHeight] = React.useState(0);
  const onNavigationBarHeightChangeCallback = (
    event: NativeSyntheticEvent<NativeNavigationBarHeightChangeEvent>
  ) => {
    console.log('SafeAreaView Navigation bar height changed:', event.nativeEvent.navigationBarHeight);
    setNavigationBarHeight(event.nativeEvent.navigationBarHeight);
    if (typeof props.onNavigationBarHeightChange === "function") {
      props.onNavigationBarHeightChange?.(event);
    }
  };

  return (
    <SafeAreaViewNativeComponent
      {...props}
      style={[styles.flex, props.style, { zIndex: undefined, paddingTop: statusBarHeight, paddingBottom: navigationBarHeight }]}
      edges={getNativeEdgesProp(props.edges)}
      onStatusBarHeightChange={onStatusBarHeightChangeCallback}
      onNavigationBarHeightChange={onNavigationBarHeightChangeCallback}
    />
  );
}

export default SafeAreaView;

function getNativeEdgesProp(
  edges: SafeAreaViewProps['edges'],
): SafeAreaViewNativeComponentProps['edges'] {
  return {
    top: false,
    bottom: false,
    left: false,
    right: false,
    ...edges,
  };
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
