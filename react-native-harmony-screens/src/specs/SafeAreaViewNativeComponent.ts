import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import { ViewProps } from 'react-native';
import { DirectEventHandler, WithDefault, Double } from 'react-native/Libraries/Types/CodegenTypes';

type InsetType = 'all' | 'system' | 'interface';

type StatusBarHeightChangeEvent = Readonly<{
  statusBarHeight: Double;
}>;

type NavigationBarHeightChangeEvent = Readonly<{
  navigationBarHeight: Double;
}>;

export interface NativeProps extends ViewProps {
  edges?: Readonly<{
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
  }>;
  // Android-only
  insetType?: WithDefault<InsetType, 'all'>;
  onStatusBarHeightChange?: DirectEventHandler<StatusBarHeightChangeEvent>;
  onNavigationBarHeightChange?: DirectEventHandler<NavigationBarHeightChangeEvent>;
}

export default codegenNativeComponent<NativeProps>('RNSSafeAreaView', {
  interfaceOnly: true,
});

