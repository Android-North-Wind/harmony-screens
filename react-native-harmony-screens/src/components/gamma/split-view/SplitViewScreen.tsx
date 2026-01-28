'use client';

import React from 'react';
import { StyleSheet } from 'react-native';
import SplitViewScreenNativeComponent from '../../../specs/SplitViewScreenNativeComponent';
import { SplitViewScreenProps } from './SplitViewScreen.types';

/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
function Column(props: SplitViewScreenProps) {
  return (
    <SplitViewScreenNativeComponent
      columnType="column"
      {...props}
      style={StyleSheet.absoluteFill}>
      {props.children}
    </SplitViewScreenNativeComponent>
  );
}

/**
 * EXPERIMENTAL API, MIGHT CHANGE W/O ANY NOTICE
 */
function Inspector(props: SplitViewScreenProps) {
  return (
    <SplitViewScreenNativeComponent
      columnType="inspector"
      {...props}
      style={StyleSheet.absoluteFill}>
      {props.children}
    </SplitViewScreenNativeComponent>
  );
}

const SplitViewScreen = {
  Column,
  Inspector,
};

export default SplitViewScreen;

