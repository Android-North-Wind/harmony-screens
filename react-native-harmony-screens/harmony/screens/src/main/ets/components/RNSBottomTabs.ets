/**
 * MIT License
 *
 * Copyright (C) 2025 Huawei Device Co., Ltd.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import {
  ColorValue,
  convertColorValueToHex,
  Descriptor,
  RNComponentContext,
  RNViewBase,
} from '@rnoh/react-native-openharmony';
import { RNC } from '../generated/ts';
import { RNSBottomTabsScreen, RNSBottomTabsScreenDescriptor } from './RNSBottomTabsScreen';

export type RNSBottomTabsDescriptor = Descriptor<"RNSBottomTabs", RNC.RNSBottomTabs.Props>

interface TabBarItemInfo {
  tag: number
  tabKey: string
  title: string
  badgeValue: string
  iconUri: string | undefined
  selectedIconUri: string | undefined
  iconType: string
}

interface GeneratedTypeLiteralInterface_1 {
  uri?: string;
}

@Component
export struct RNSBottomTabs {
  public static readonly NAME = RNC.RNSBottomTabs.NAME
  public ctx!: RNComponentContext
  public tag: number = 0
  @State descriptor: RNSBottomTabsDescriptor = {} as RNSBottomTabsDescriptor
  private eventEmitter: RNC.RNSBottomTabs.EventEmitter | undefined = undefined
  private cleanUpCallbacks: (() => void)[] = []
  @State private children: number[] = []
  @State private focusedTabKey: string = ""
  @State private selectedIndex: number = 0
  @State private tabBarItems: TabBarItemInfo[] = []

  // Appearance props
  @State tabBarBackgroundColor: string = "#FFFFFF"
  @State tabBarItemTitleFontFamily: string = ""
  @State tabBarItemTitleFontSize: number = 14
  @State tabBarItemTitleFontSizeActive: number = 14
  @State tabBarItemTitleFontWeight: string = "normal"
  @State tabBarItemTitleFontStyle: FontStyle = FontStyle.Normal
  @State tabBarItemTitleFontColor: string = "#000000"
  @State tabBarItemTitleFontColorActive: string = "#007AFF"
  @State tabBarItemIconColor: string = "#000000"
  @State tabBarItemIconColorActive: string = "#007AFF"
  @State tabBarItemActiveIndicatorColor: string = "#007AFF"
  @State tabBarItemActiveIndicatorEnabled: boolean = true
  @State tabBarItemRippleColor: string = ""
  @State tabBarItemLabelVisibilityMode: string = "auto"
  @State tabBarTintColor: string = "#007AFF"
  @State tabBarMinimizeBehavior: string = "automatic"
  @State tabBarControllerMode: string = "automatic"
  @State controlNavigationStateInJS: boolean = false

  aboutToAppear() {
    this.eventEmitter = new RNC.RNSBottomTabs.EventEmitter(this.ctx.rnInstance, this.tag)
    this.descriptor = this.ctx.descriptorRegistry.getDescriptor<RNSBottomTabsDescriptor>(this.tag)
    this.cleanUpCallbacks.push(this.ctx.descriptorRegistry.subscribeToDescriptorChanges(this.tag,
      (newDescriptor) => {
        this.descriptor = (newDescriptor as RNSBottomTabsDescriptor)
        this.onDescriptorChange()
      }
    ))
    this.onDescriptorChange()
  }

  aboutToDisappear() {
    this.cleanUpCallbacks.forEach(cb => cb())
  }

  onDescriptorChange() {
    const raw = this.descriptor.rawProps['tabBarBackgroundColor'] as ColorValue;
    this.tabBarBackgroundColor = raw != null
      ? convertColorValueToHex(raw) || "#FFFFFF"
      : "#FFFFFF";

    const tabBarItemTitleFontFamilyValue = this.descriptor.rawProps['tabBarItemTitleFontFamily'] as string | undefined
    if (tabBarItemTitleFontFamilyValue !== undefined) {
      this.tabBarItemTitleFontFamily = tabBarItemTitleFontFamilyValue || ""
    }
    const tabBarItemTitleFontSizeValue = this.descriptor.rawProps['tabBarItemTitleFontSize'] as number | undefined
    if (tabBarItemTitleFontSizeValue !== undefined) {
      this.tabBarItemTitleFontSize = tabBarItemTitleFontSizeValue || 14
    }
    const tabBarItemTitleFontSizeActiveValue = this.descriptor.rawProps['tabBarItemTitleFontSizeActive'] as number | undefined
    if (tabBarItemTitleFontSizeActiveValue !== undefined) {
      this.tabBarItemTitleFontSizeActive = tabBarItemTitleFontSizeActiveValue || 14
    }
    const tabBarItemTitleFontWeightValue = this.descriptor.rawProps['tabBarItemTitleFontWeight'] as string | undefined
    if (tabBarItemTitleFontWeightValue !== undefined) {
      this.tabBarItemTitleFontWeight = tabBarItemTitleFontWeightValue || "normal"
    }
    const tabBarItemTitleFontStyleValue = this.descriptor.rawProps['tabBarItemTitleFontStyle'] as string | undefined
    if (tabBarItemTitleFontStyleValue !== undefined) {
      if (tabBarItemTitleFontStyleValue === "italic") {
        this.tabBarItemTitleFontStyle = FontStyle.Italic
      } else {
        this.tabBarItemTitleFontStyle = FontStyle.Normal
      }
    }
    const tabBarItemTitleFontColorValue = this.descriptor.rawProps['tabBarItemTitleFontColor'] as ColorValue | undefined
    if (tabBarItemTitleFontColorValue !== undefined) {
      this.tabBarItemTitleFontColor = convertColorValueToHex(tabBarItemTitleFontColorValue) || "#000000"
    }
    const tabBarItemTitleFontColorActiveValue = this.descriptor.rawProps['tabBarItemTitleFontColorActive'] as ColorValue | undefined
    if (tabBarItemTitleFontColorActiveValue !== undefined) {
      this.tabBarItemTitleFontColorActive = convertColorValueToHex(tabBarItemTitleFontColorActiveValue) || "#007AFF"
    }
    const tabBarItemIconColorValue = this.descriptor.rawProps['tabBarItemIconColor'] as ColorValue | undefined
    if (tabBarItemIconColorValue !== undefined) {
      this.tabBarItemIconColor = convertColorValueToHex(tabBarItemIconColorValue) || "#000000"
    }
    const tabBarItemIconColorActiveValue = this.descriptor.rawProps['tabBarItemIconColorActive'] as ColorValue | undefined
    if (tabBarItemIconColorActiveValue !== undefined) {
      this.tabBarItemIconColorActive = convertColorValueToHex(tabBarItemIconColorActiveValue) || "#007AFF"
    }
    const tabBarItemActiveIndicatorColorValue = this.descriptor.rawProps['tabBarItemActiveIndicatorColor'] as ColorValue | undefined
    if (tabBarItemActiveIndicatorColorValue !== undefined) {
      this.tabBarItemActiveIndicatorColor = convertColorValueToHex(tabBarItemActiveIndicatorColorValue) || "#007AFF"
    }
    const tabBarItemActiveIndicatorEnabledValue = this.descriptor.rawProps['tabBarItemActiveIndicatorEnabled'] as boolean | undefined
    if (tabBarItemActiveIndicatorEnabledValue !== undefined) {
      this.tabBarItemActiveIndicatorEnabled = tabBarItemActiveIndicatorEnabledValue !== false
    }
    const tabBarItemRippleColorValue = this.descriptor.rawProps['tabBarItemRippleColor'] as ColorValue | undefined
    if (tabBarItemRippleColorValue !== undefined) {
      this.tabBarItemRippleColor = convertColorValueToHex(tabBarItemRippleColorValue) || ""
    }
    const tabBarItemLabelVisibilityModeValue = this.descriptor.rawProps['tabBarItemLabelVisibilityMode'] as string | undefined
    if (tabBarItemLabelVisibilityModeValue !== undefined) {
      this.tabBarItemLabelVisibilityMode = tabBarItemLabelVisibilityModeValue || "auto"
    }
    const tabBarTintColorValue = this.descriptor.rawProps['tabBarTintColor'] as ColorValue | undefined
    if (tabBarTintColorValue !== undefined) {
      this.tabBarTintColor = convertColorValueToHex(tabBarTintColorValue) || "#007AFF"
    }
    const tabBarMinimizeBehaviorValue = this.descriptor.rawProps['tabBarMinimizeBehavior'] as string | undefined
    if (tabBarMinimizeBehaviorValue !== undefined) {
      this.tabBarMinimizeBehavior = tabBarMinimizeBehaviorValue || "automatic"
    }
    const tabBarControllerModeValue = this.descriptor.rawProps['tabBarControllerMode'] as string | undefined
    if (tabBarControllerModeValue !== undefined) {
      this.tabBarControllerMode = tabBarControllerModeValue || "automatic"
    }
    const controlNavigationStateInJSValue = this.descriptor.rawProps['controlNavigationStateInJS'] as boolean | undefined
    if (controlNavigationStateInJSValue !== undefined) {
      this.controlNavigationStateInJS = controlNavigationStateInJSValue === true
    }

    // Update children
    const newChildren = this.descriptor.childrenTags
    if (JSON.stringify(newChildren) !== JSON.stringify(this.children)) {
      this.children = newChildren
      this.updateTabBarItems()
      this.updateFocusedTab()
    }
  }

  updateTabBarItems() {
    const items: TabBarItemInfo[] = []
    for (let i = 0; i < this.children.length; i++) {
      const childTag = this.children[i]
      const childDescriptor = this.ctx.descriptorRegistry.getDescriptor<RNSBottomTabsScreenDescriptor>(childTag)
      if (childDescriptor) {
        const tabKeyValue = childDescriptor.rawProps['tabKey'] as string | undefined
        const titleValue = childDescriptor.rawProps['title'] as string | undefined
        const badgeValueValue = childDescriptor.rawProps['badgeValue'] as string | undefined
        const iconTypeValue = childDescriptor.rawProps['iconType'] as string | undefined

        // Try iconResource first (Android-specific)
        const iconResourceValue = childDescriptor.rawProps['iconResource'] as GeneratedTypeLiteralInterface_1 | undefined
        let iconUri: string | undefined = undefined
        if (iconResourceValue?.uri) {
          // Convert to string if it's a number (resource ID)
          iconUri = typeof iconResourceValue.uri === 'string' ? iconResourceValue.uri : String(iconResourceValue.uri)
        }

        // If iconResource is not available, try iconImageSource
        if (!iconUri) {
          const iconImageSourceValue = childDescriptor.rawProps['iconImageSource'] as GeneratedTypeLiteralInterface_1 | undefined
          if (iconImageSourceValue?.uri) {
            // Convert to string if it's a number (resource ID)
            iconUri = typeof iconImageSourceValue.uri === 'string' ? iconImageSourceValue.uri : String(iconImageSourceValue.uri)
          }
        }

        // Get selectedIconImageSource
        const selectedIconImageSourceValue = childDescriptor.rawProps['selectedIconImageSource'] as GeneratedTypeLiteralInterface_1 | undefined
        let selectedIconUri: string | undefined = undefined
        if (selectedIconImageSourceValue?.uri) {
          // Convert to string if it's a number (resource ID)
          selectedIconUri = typeof selectedIconImageSourceValue.uri === 'string'
            ? selectedIconImageSourceValue.uri
            : String(selectedIconImageSourceValue.uri)
        }

        if (tabKeyValue) {
          items.push({
            tag: childTag,
            tabKey: tabKeyValue,
            title: titleValue || "",
            badgeValue: badgeValueValue || "",
            iconUri: iconUri,
            selectedIconUri: selectedIconUri,
            iconType: iconTypeValue || "image"
          })
        }
      }
    }
    this.tabBarItems = items
  }

  updateFocusedTab() {
    if (this.tabBarItems.length > 0 && !this.focusedTabKey) {
      const firstItem = this.tabBarItems[0]
      this.focusedTabKey = firstItem.tabKey
      this.emitFocusChangeEvent(this.focusedTabKey)
    }
  }

  onTabChange(index: number) {
    if (index >= 0 && index < this.tabBarItems.length && index !== this.selectedIndex) {
      this.selectedIndex = index
      const item = this.tabBarItems[index]
      if (item.tabKey !== this.focusedTabKey) {
        this.focusedTabKey = item.tabKey
        this.emitFocusChangeEvent(this.focusedTabKey)
      }
    }
  }

  emitFocusChangeEvent(tabKey: string) {
    if (this.eventEmitter) {
      this.eventEmitter.emit("onNativeFocusChange", {
        tabKey: tabKey
      })
    }
  }

  build() {
    Column() {
      // Content area
      Stack() {
        ForEach(this.tabBarItems, (item: TabBarItemInfo, index: number) => {
          if (index === this.selectedIndex) {
            RNSBottomTabsScreen({
              ctx: this.ctx,
              tag: item.tag,
            })
          }
        }, (item: TabBarItemInfo) => item.tabKey)
      }
      .layoutWeight(1)
      .width('100%')

      // Tab bar
      Row() {
        ForEach(this.tabBarItems, (item: TabBarItemInfo, index: number) => {
          this.buildTabBarItem(item, index)
        }, (item: TabBarItemInfo) => item.tabKey)
      }
      .width('100%')
      .height(56)
      .backgroundColor(this.tabBarBackgroundColor)
      .justifyContent(FlexAlign.SpaceAround)
      .alignItems(VerticalAlign.Center)
    }
    .width('100%')
    .height('100%')
  }

  isSelected(index: number): boolean{
    return index === this.selectedIndex;
  }

  currentIconUri(item: TabBarItemInfo, index: number): string | undefined {
    const isSelected = this.isSelected(index)
    // JS side has already converted the URI, so we can use it directly
    return (isSelected && item.selectedIconUri) ? item.selectedIconUri : item.iconUri
  }

  @Builder
  buildTabBarItem(item: TabBarItemInfo, index: number) {

    Column() {
      if (this.currentIconUri(item, index) && this.currentIconUri(item, index) !== "") {
        Image(this.currentIconUri(item, index))
          .width(24)
          .height(24)
          .objectFit(ImageFit.Contain)
          .fillColor(this.isSelected(index)
            ? this.tabBarItemIconColorActive
            : this.tabBarItemIconColor)
          .onError(() => {
            console.error('RNSBottomTabs Image load error for uri: ' + this.currentIconUri(item, index))
          })
      } else {
        Blank()
          .width(24)
          .height(24)
      }
      // Label visibility logic:
      // - "unlabeled": never show
      // - "labeled": always show
      // - "auto": show if tab count <= 3
      // - "selected": show only for selected tab
      if (this.tabBarItemLabelVisibilityMode !== "unlabeled" &&
        (this.tabBarItemLabelVisibilityMode === "labeled" ||
          (this.tabBarItemLabelVisibilityMode === "auto" && this.tabBarItems.length <= 3) ||
          (this.tabBarItemLabelVisibilityMode === "selected" && this.isSelected(index)))) {
        Text(item.title)
          .fontSize(this.isSelected(index)
            ? this.tabBarItemTitleFontSizeActive
            : this.tabBarItemTitleFontSize)
          .fontWeight(this.tabBarItemTitleFontWeight)
          .fontStyle(this.tabBarItemTitleFontStyle)
          .fontFamily(this.tabBarItemTitleFontFamily)
          .fontColor(this.isSelected(index)
            ? this.tabBarItemTitleFontColorActive
            : this.tabBarItemTitleFontColor)
          .margin({ top: 2 })
          .maxLines(1)
          .textOverflow({ overflow: TextOverflow.Ellipsis })
      }

      if (item.badgeValue && item.badgeValue !== "") {
        Text(item.badgeValue)
          .fontSize(10)
          .fontColor("#FFFFFF")
          .backgroundColor("#FF3B30")
          .padding({ left: 4, right: 4, top: 2, bottom: 2 })
          .borderRadius(10)
          .position({ x: 20, y: -5 })
      }
    }
    .layoutWeight(1)
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Center)
    .height('100%')
    .width('100%')
    .onClick(() => {
      this.onTabChange(index)
    })
    .backgroundColor(this.isSelected(index) && this.tabBarItemActiveIndicatorEnabled ?
      (this.tabBarItemActiveIndicatorColor + "20") : Color.Transparent)
  }
}
