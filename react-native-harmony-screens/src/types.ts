'use client';

import React from 'react';
import { Animated } from 'react-native';
import type { StyleProp, ViewStyle } from 'react-native';

export type HeaderHeightChangeEventType = {
  headerHeight: number;
};

export type GoBackGesture = 'swipeRight' | 'swipeLeft' | 'swipeDown' | 'swipeUp' | 'horizontalSwipe' | 'verticalSwipe' | 'twoDimensionalSwipe';

export type AnimatedScreenTransition = any;

export interface GestureProviderProps {
  children?: React.ReactNode;
  gestureDetectorBridge?: any;
  goBackGesture?: GoBackGesture;
  screenEdgeGesture?: boolean;
  transitionAnimation?: AnimatedScreenTransition;
  screensRefs?: React.RefObject<ScreensRefsHolder>;
  currentScreenId?: string;
}

export interface GestureDetectorBridge {
  stackUseEffectCallback: (stackRef: any) => void;
}

export interface ScreensRefsHolder {
  [key: string]: React.RefObject<any>;
}

export interface ScreenStackProps {
  children?: React.ReactNode;
  goBackGesture?: GoBackGesture;
  screensRefs?: React.RefObject<ScreensRefsHolder>;
  currentScreenId?: string;
  transitionAnimation?: AnimatedScreenTransition;
  screenEdgeGesture?: boolean;
  onFinishTransitioning?: () => void;
  [key: string]: any;
}

export interface ScreenProps {
  active?: 0 | 1 | 2 | 3 | 4 | number | Animated.AnimatedAddition<number>;
  activityState?: 0 | 1 | 2 | 3 | 4 | number | Animated.AnimatedAddition<number>;
  children?: React.ReactNode;
  enabled?: boolean;
  isNativeStack?: boolean;
  hasLargeHeader?: boolean;
  style?: StyleProp<ViewStyle>;
  sheetAllowedDetents?: number[];
  sheetLargestUndimmedDetent?: number;
  sheetGrabberVisible?: boolean;
  sheetCornerRadius?: number;
  sheetExpandsWhenScrolledToEdge?: boolean;
  sheetInitialDetent?: number;
  sheetElevation?: number;
  customAnimationOnSwipe?: boolean;
  fullScreenSwipeEnabled?: boolean;
  fullScreenSwipeShadowEnabled?: boolean;
  homeIndicatorHidden?: boolean;
  preventNativeDismiss?: boolean;
  gestureEnabled?: boolean;
  statusBarColor?: string | number;
  statusBarHidden?: boolean;
  screenOrientation?: string;
  statusBarAnimation?: string;
  statusBarStyle?: string;
  statusBarTranslucent?: boolean;
  gestureResponseDistance?: {
    start?: number;
    end?: number;
    top?: number;
    bottom?: number;
  };
  stackPresentation?: 'push' | 'modal' | 'transparentModal' | 'containedModal' | 'containedTransparentModal' | 'fullScreenModal' | 'formSheet' | 'pageSheet';
  stackAnimation?: 'default' | 'flip' | 'simple_push' | 'none' | 'fade' | 'slide_from_right' | 'slide_from_left' | 'slide_from_bottom' | 'fade_from_bottom' | 'ios_from_right' | 'ios_from_left';
  transitionDuration?: number;
  replaceAnimation?: 'pop' | 'push';
  swipeDirection?: 'vertical' | 'horizontal';
  hideKeyboardOnSwipe?: boolean;
  onAppear?: () => void;
  onDisappear?: () => void;
  onDismissed?: (event: { dismissCount: number }) => void;
  onNativeDismissCancelled?: (event: { dismissCount: number }) => void;
  onWillAppear?: () => void;
  onWillDisappear?: () => void;
  onHeaderHeightChange?: (event: { nativeEvent: HeaderHeightChangeEventType }) => void;
  onTransitionProgress?: (event: { nativeEvent: { progress: number; closing: number; goingForward: number } }) => void;
  onGestureCancel?: () => void;
  onHeaderBackButtonClicked?: () => void;
  onSheetDetentChanged?: (event: { nativeEvent: { index: number; isStable: boolean } }) => void;
  screenId?: string;
  freezeOnBlur?: boolean;
  shouldFreeze?: boolean;
  placeholder?: React.ReactNode;
  // eslint-disable-next-line camelcase
  unstable_sheetFooter?: () => React.ReactNode;
}

export interface ScreenContainerProps {
  children?: React.ReactNode;
  enabled?: boolean;
  style?: StyleProp<ViewStyle>;
  hasTwoStates?: boolean;
}

export interface ScreenStackHeaderConfigProps {
  backTitle?: string;
  backTitleFontFamily?: string;
  backTitleFontSize?: number;
  backTitleVisible?: boolean;
  backgroundColor?: string | number;
  blurEffect?: 'none' | 'extraLight' | 'light' | 'dark' | 'regular' | 'prominent' | 'systemUltraThinMaterial' | 'systemThinMaterial' | 'systemMaterial' | 'systemThickMaterial' | 'systemChromeMaterial' | 'systemUltraThinMaterialLight' | 'systemThinMaterialLight' | 'systemMaterialLight' | 'systemThickMaterialLight' | 'systemChromeMaterialLight' | 'systemUltraThinMaterialDark' | 'systemThinMaterialDark' | 'systemMaterialDark' | 'systemThickMaterialDark' | 'systemChromeMaterialDark';
  color?: string | number;
  direction?: 'ltr' | 'rtl';
  disableBackButtonMenu?: boolean;
  hidden?: boolean;
  hideShadow?: boolean;
  largeTitle?: boolean;
  largeTitleBackgroundColor?: string | number;
  largeTitleColor?: string | number;
  largeTitleFontFamily?: string;
  largeTitleFontSize?: number;
  largeTitleFontWeight?: string;
  largeTitleShadowColor?: string | number;
  largeTitleShadowOffset?: { width: number; height: number };
  largeTitleShadowOpacity?: number;
  largeTitleShadowRadius?: number;
  translucent?: boolean;
  title?: string;
  titleColor?: string | number;
  titleFontFamily?: string;
  titleFontSize?: number;
  titleFontWeight?: string;
  topInsetEnabled?: boolean;
  [key: string]: any;
}

export interface GestureProviderProps {
  children?: React.ReactNode;
  gestureDetectorBridge?: any;
}

// Re-export from shared types if needed
export * from './components/shared/types';
