import type { NativeSyntheticEvent, ViewProps } from 'react-native';

// eslint-disable-next-line @typescript-eslint/ban-types
type GenericEmptyEvent = Readonly<{}>;

export type DisplayModeWillChangeEvent = {
  currentDisplayMode: string;
  nextDisplayMode: string;
};

export type SplitViewDisplayModeButtonVisibility =
  | 'always'
  | 'automatic'
  | 'never';

export type SplitViewSplitBehavior =
  | 'automatic'
  | 'displace'
  | 'overlay'
  | 'tile';

export type SplitViewPrimaryEdge = 'leading' | 'trailing';

export type SplitViewDisplayMode =
  | 'automatic'
  | 'secondaryOnly'
  | 'oneBesideSecondary'
  | 'oneOverSecondary'
  | 'twoBesideSecondary'
  | 'twoOverSecondary'
  | 'twoDisplaceSecondary';

export type SplitViewHostOrientation =
  | 'inherit'
  | 'all'
  | 'allButUpsideDown'
  | 'portrait'
  | 'portraitUp'
  | 'portraitDown'
  | 'landscape'
  | 'landscapeLeft'
  | 'landscapeRight';

export interface SplitViewColumnMetrics {
  minimumPrimaryColumnWidth?: number;
  maximumPrimaryColumnWidth?: number;
  preferredPrimaryColumnWidthOrFraction?: number;
  minimumSupplementaryColumnWidth?: number;
  maximumSupplementaryColumnWidth?: number;
  preferredSupplementaryColumnWidthOrFraction?: number;
  minimumSecondaryColumnWidth?: number;
  preferredSecondaryColumnWidthOrFraction?: number;
  minimumInspectorColumnWidth?: number;
  maximumInspectorColumnWidth?: number;
  preferredInspectorColumnWidthOrFraction?: number;
}

export interface SplitViewHostProps extends ViewProps {
  children?: React.ReactNode;

  columnMetrics?: SplitViewColumnMetrics;
  displayModeButtonVisibility?: SplitViewDisplayModeButtonVisibility;
  onCollapse?: (e: NativeSyntheticEvent<GenericEmptyEvent>) => void;
  onDisplayModeWillChange?: (
    e: NativeSyntheticEvent<DisplayModeWillChangeEvent>,
  ) => void;
  onExpand?: (e: NativeSyntheticEvent<GenericEmptyEvent>) => void;
  onInspectorHide?: (e: NativeSyntheticEvent<GenericEmptyEvent>) => void;
  orientation?: SplitViewHostOrientation;
  presentsWithGesture?: boolean;
  preferredDisplayMode?: SplitViewDisplayMode;
  preferredSplitBehavior?: SplitViewSplitBehavior;
  primaryEdge?: SplitViewPrimaryEdge;
  showInspector?: boolean;
  showSecondaryToggleButton?: boolean;
}

