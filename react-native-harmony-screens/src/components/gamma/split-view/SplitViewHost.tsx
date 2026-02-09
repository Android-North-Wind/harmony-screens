'use client';

import React from 'react';
import { StyleSheet } from 'react-native';
import SplitViewHostNativeComponent from '../../../specs/SplitViewHostNativeComponent';
import type { SplitViewHostProps } from './SplitViewHost.types';

// 根据 UIKit 文档，对 displayMode 与 splitBehavior 的合法组合做一次 JS 侧校验
const displayModeForSplitViewCompatibilityMap: Record<
  NonNullable<SplitViewHostProps['preferredSplitBehavior']>,
  NonNullable<SplitViewHostProps['preferredDisplayMode']>[]
> = {
  tile: ['secondaryOnly', 'oneBesideSecondary', 'twoBesideSecondary'],
  overlay: ['secondaryOnly', 'oneOverSecondary', 'twoOverSecondary'],
  displace: ['secondaryOnly', 'oneBesideSecondary', 'twoDisplaceSecondary'],
  automatic: [],
};

const isValidDisplayModeForSplitBehavior = (
  displayMode: NonNullable<SplitViewHostProps['preferredDisplayMode']>,
  splitBehavior: NonNullable<SplitViewHostProps['preferredSplitBehavior']>,
) => {
  if (splitBehavior === 'automatic') {
    return true;
  }
  return displayModeForSplitViewCompatibilityMap[splitBehavior].includes(
    displayMode,
  );
};

/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
function SplitViewHost(props: SplitViewHostProps) {
  const { preferredDisplayMode, preferredSplitBehavior } = props;

  React.useEffect(() => {
    if (preferredDisplayMode && preferredSplitBehavior) {
      const isValid = isValidDisplayModeForSplitBehavior(
        preferredDisplayMode,
        preferredSplitBehavior,
      );
      if (!isValid) {
        const validDisplayModes =
          displayModeForSplitViewCompatibilityMap[preferredSplitBehavior];
        console.warn(
          `Invalid display mode "${preferredDisplayMode}" for split behavior "${preferredSplitBehavior}".` +
            `\nValid modes for "${preferredSplitBehavior}" are: ${validDisplayModes.join(
              ', ',
            )}.`,
        );
      }
    }
  }, [preferredDisplayMode, preferredSplitBehavior]);

  return (
    <SplitViewHostNativeComponent {...props} style={styles.container}>
      {props.children}
    </SplitViewHostNativeComponent>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SplitViewHost;

