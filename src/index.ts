import { run } from './main.js'
import { createGitHubActionsHandle } from './io/handle.js'

const handle = createGitHubActionsHandle()

/* istanbul ignore next */
run(handle)
