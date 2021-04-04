![Logo](https://github.com/ghalex/zebbra-ui/blob/main/public/logo.png)

<hr />

[![npm](https://img.shields.io/npm/dm/@zebbra/ui?style=flat-square)](https://www.npmjs.com/package/@zebbra/ui)
[![npm](https://img.shields.io/npm/v/@zebbra/ui?style=flat-square)](https://www.npmjs.com/package/@zebbra/ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

**ZebbraUI** is a collection of Vue components for building accessible high level UI libraries. ZebbraUI doesn't depend on any CSS library. Components are unstyled by default.

**ZebbraUI** basic example:

Here is a simple dialog:

```js
<div>
  <ZbDialogDisclosure :state="dlg1">Open dialog</ZbDialogDisclosure>
  <ZbDialog :state="dlg1">
    <h2 class="border-b-2 border-gray-500 px-2 py-2">Hy! this is a dialog</h2>
    <div class="p-8">
      <ZbButton @click="dlg1.close">Click to close</ZbButton>
    </div>
  </ZbDialog>
  <ZbDialogBackdrop class="bg-purple-200 opacity-30" :state="dlg1" />
</div>
```

```js
<script>
import { defineComponent } from 'vue'
import { useDialog, ZbDialog, ZbDialogDisclosure, ZbDialogBackdrop } from '@zebbra/ui'

export default defineComponent({
  components: { ZbDialog, ZbDialogDisclosure, ZbDialogBackdrop },
  setup() {
    const dlg1 = useDialog()
    return { dlg1 }
  }
})
</script>
```

[View on Github](https://github.com/ghalex/zebbra-ui)

## Components List

This project is still in early development. New components will be added regularly.

- [ ] Box
- [x] Button
- [x] Checkbox
- [x] Radio
- [ ] DatePicker
- [ ] Dropdown
- [ ] Field
- [ ] Group
- [x] Input
- [x] Menu
- [ ] Switch
- [ ] Textarea

## License

Copyright (c) 2018 [Zebbra contributors](https://github.com/ghalex/zebbra-ui/graphs/contributors)

Licensed under the [MIT license](https://github.com/ghalex/zebbra-ui/blob/HEAD/LICENSE).
