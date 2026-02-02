/**
 * Harmony implementation of experimental gamma StackScreen.
 * It mirrors the RNSScreen lifecycle pattern in a simplified way.
 */

import { Descriptor, RNComponentContext, RNViewBase } from '@rnoh/react-native-openharmony';
import { RNC } from '../generated/ts';

export type RNSStackScreenDescriptor = Descriptor<'RNSStackScreen', RNC.RNSStackScreen.Props>;

@Component
export struct RNSStackScreen {
  public static readonly NAME = RNC.RNSStackScreen.NAME;
  public ctx!: RNComponentContext;
  public tag: number = 0;

  @State descriptor: RNSStackScreenDescriptor = {} as RNSStackScreenDescriptor;
  private eventEmitter: RNC.RNSStackScreen.EventEmitter | undefined = undefined;
  private cleanUpCallbacks: (() => void)[] = [];

  @State maxLifecycleState: number = 0;
  @State screenKey: string = '';
  @State private nativeViewIsVisible: boolean = false;

  aboutToAppear() {
    this.eventEmitter = new RNC.RNSStackScreen.EventEmitter(this.ctx.rnInstance, this.tag);
    this.descriptor =
      this.ctx.descriptorRegistry.getDescriptor<RNSStackScreenDescriptor>(this.tag);
    this.cleanUpCallbacks.push(
      this.ctx.descriptorRegistry.subscribeToDescriptorChanges(this.tag, (newDescriptor) => {
        this.descriptor = newDescriptor as RNSStackScreenDescriptor;
        this.onDescriptorChange();
      }),
    );
    this.onDescriptorChange();
    // Initial "willAppear" when component comes into view tree
    this.emitWillAppear();
  }

  aboutToDisappear() {
    this.cleanUpCallbacks.forEach((cb) => cb());
    if (this.nativeViewIsVisible) {
      this.emitWillDisappear();
      this.emitDidDisappear();
    }
  }

  onDescriptorChange() {

    const maxLifecycleStateValue = this.descriptor.rawProps['maxLifecycleState'] as number | undefined;
    if (maxLifecycleStateValue !== undefined) {
      this.maxLifecycleState = maxLifecycleStateValue;
    }

    const screenKeyValue = this.descriptor.rawProps['screenKey'] as string | undefined;
    if (screenKeyValue !== undefined) {
      this.screenKey = screenKeyValue;
    }
  }

  onPageShow() {
    if (!this.nativeViewIsVisible) {
      this.nativeViewIsVisible = true;
      this.emitDidAppear();
    }
  }

  onPageHide() {
    if (this.nativeViewIsVisible) {
      this.nativeViewIsVisible = false;
      this.emitWillDisappear();
      this.emitDidDisappear();
    }
  }

  private emitWillAppear() {
    if (this.eventEmitter) {
      this.eventEmitter.emit('onWillAppear', {});
    }
  }

  private emitDidAppear() {
    if (this.eventEmitter) {
      this.eventEmitter.emit('onDidAppear', {});
    }
  }

  private emitWillDisappear() {
    if (this.eventEmitter) {
      this.eventEmitter.emit('onWillDisappear', {});
    }
  }

  private emitDidDisappear() {
    if (this.eventEmitter) {
      this.eventEmitter.emit('onDidDisappear', {});
    }
  }

  build() {
    RNViewBase({ ctx: this.ctx, tag: this.tag }) {
      Column() {
        ContentSlot(this.ctx.getContentForTag(this.tag));
      }
      .width('100%')
      .height('100%')
      .onAppear(() => {
        this.onPageShow();
      })
      .onDisAppear(() => {
        this.onPageHide();
      });
    }
  }
}

