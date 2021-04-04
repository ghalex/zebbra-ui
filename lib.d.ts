import { DefineComponent, Plugin, Ref } from 'vue'

declare const ZebbraUi: Exclude<Plugin['install'], undefined>
export default ZebbraUi

export const ZbButton: DefineComponent<{}, {}, any>
export const ZbCheckbox: DefineComponent<{}, {}, any>
export const ZbRadio: DefineComponent<{}, {}, any>
export const ZbInput: DefineComponent<{}, {}, any>
export const ZbDialog: DefineComponent<{}, {}, any>
export const ZbDialogDisclosure: DefineComponent<{}, {}, any>
export const ZbDialogBackdrop: DefineComponent<{}, {}, any>
export const ZbMenu: DefineComponent<{}, {}, any>
export const ZbMenuButton: DefineComponent<{}, {}, any>
export const ZbMenuItems: DefineComponent<{}, {}, any>
export const ZbMenuItem: DefineComponent<{}, {}, any>

interface DialogState {
  isOpen: boolean
  events: any
  open: () => void
  close: () => void
}

interface MenuState {
  isOpen: boolean
  open: () => void
  close: () => void
}

declare const useDialog: () => DialogState
declare const useMenu: () => MenuState
declare const useOutside: (el: Ref<any>, exclude: Ref<any>[], handler: () => void) => any

export { useDialog, useMenu, useOutside }
