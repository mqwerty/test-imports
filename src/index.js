import { one } from '#utils'
import { foo } from '#utils/foo'
import { bar } from '#utils/bar.js'
import { inner } from '#utils/inner/index'
import { baz } from '#utils/inner/baz.js'

one()
foo()
bar()
inner()
baz()
