import { Handle } from './ports.js'

export async function run_post(handle: Handle): Promise<void> {
  const env = handle.getEnv()
  const cache = handle.getCache()

  const version = env.getVersionInput()
  await cache.save(version)
}
