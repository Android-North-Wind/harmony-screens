import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import { ViewProps } from 'react-native';
import { WithDefault } from 'react-native/Libraries/Types/CodegenTypes';

type InsetType = 'all' | 'system' | 'interface';

export interface NativeProps extends ViewProps {
  edges?: Readonly<{
    top: boolean;
    right: boolean;
    bottom: boolean;
    left: boolean;
  }>;
  // Android-only
  insetType?: WithDefault<InsetType, 'all'>;
}

export default codegenNativeComponent<NativeProps>('RNSSafeAreaView', {
  interfaceOnly: true,
});

