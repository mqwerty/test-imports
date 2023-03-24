import { one } from '#utils'
import { foo } from '#utils/foo.js'
import { inner } from '#utils/inner'
import { bar } from '#utils/inner/bar.js'

one()
foo()
inner()
bar()
