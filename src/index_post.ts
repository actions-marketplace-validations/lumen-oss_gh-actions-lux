import { run_post } from './post.js'
import { createGitHubActionsHandle } from './io/handle.js'

const handle = createGitHubActionsHandle()

/* istanbul ignore next */
run_post(handle)
