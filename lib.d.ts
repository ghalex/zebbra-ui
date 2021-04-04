import { DefineComponent, Plugin } from 'vue'

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
