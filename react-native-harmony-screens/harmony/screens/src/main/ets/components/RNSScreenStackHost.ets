/**
 * Harmony implementation of experimental gamma ScreenStackHost.
 * This is a light-weight container that simply renders its children.
 */

import { Descriptor, RNComponentContext, RNViewBase } from '@rnoh/react-native-openharmony';
import { RNC } from '../generated/ts';

export type RNSScreenStackHostDescriptor = Descriptor<
  'RNSScreenStackHost',
  RNC.RNSScreenStackHost.Props
>;

@Component
export struct RNSScreenStackHost {
  public static readonly NAME = RNC.RNSScreenStackHost.NAME;
  public ctx!: RNComponentContext;
  public tag: number = 0;

  @State descriptor: RNSScreenStackHostDescriptor = {} as RNSScreenStackHostDescriptor;
  private cleanUpCallbacks: (() => void)[] = [];

  aboutToAppear() {
    this.descriptor =
      this.ctx.descriptorRegistry.getDescriptor<RNSScreenStackHostDescriptor>(this.tag);
    this.cleanUpCallbacks.push(
      this.ctx.descriptorRegistry.subscribeToDescriptorChanges(this.tag, (newDescriptor) => {
        this.descriptor = newDescriptor as RNSScreenStackHostDescriptor;
      }),
    );
  }

  aboutToDisappear() {
    this.cleanUpCallbacks.forEach((cb) => cb());
  }

  build() {
    RNViewBase({ ctx: this.ctx, tag: this.tag }) {
      Stack() {
        // Simply render all children; individual StackScreen items will manage their own lifecycles.
        ContentSlot(this.ctx.getContentForTag(this.tag));
      }
      .width('100%')
      .height('100%');
    }
  }
}

