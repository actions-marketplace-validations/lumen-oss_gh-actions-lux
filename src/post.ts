import { collectConfig } from './inputs.js'
import { Handle } from './ports.js'

export async function run_post(handle: Handle): Promise<void> {
  const env = handle.getEnv()
  const cache = handle.getCache()

  const config = collectConfig(env)
  await cache.save(config.version)
}
