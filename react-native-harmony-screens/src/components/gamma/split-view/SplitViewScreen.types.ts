import type { NativeSyntheticEvent, ViewProps } from 'react-native';

// eslint-disable-next-line @typescript-eslint/ban-types
type GenericEmptyEvent = Readonly<{}>;

export type SplitViewScreenColumnType = 'column' | 'inspector';

export interface SplitViewScreenProps extends ViewProps {
  children?: React.ReactNode;
  onDidAppear?: (e: NativeSyntheticEvent<GenericEmptyEvent>) => void;
  onDidDisappear?: (e: NativeSyntheticEvent<GenericEmptyEvent>) => void;
  onWillAppear?: (e: NativeSyntheticEvent<GenericEmptyEvent>) => void;
  onWillDisappear?: (e: NativeSyntheticEvent<GenericEmptyEvent>) => void;
}

