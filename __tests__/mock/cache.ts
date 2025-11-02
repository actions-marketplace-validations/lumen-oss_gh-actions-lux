import type { Cache } from '../../src/ports.js'

export class MockCache implements Cache {
  async restore(): Promise<void> {}

  async save(): Promise<void> {}
}
