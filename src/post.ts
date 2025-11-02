import { Handle } from './ports.js'

export async function run_post(handle: Handle): Promise<void> {
  const cache = handle.getCache()
  await cache.save()
}
