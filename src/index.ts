import { one } from '#utils'
import { foo } from '#utils/foo.ts'
import { inner } from '#utils/inner/index.ts'
import { bar } from '#utils/inner/bar.ts'

one()
foo()
inner()
bar()
