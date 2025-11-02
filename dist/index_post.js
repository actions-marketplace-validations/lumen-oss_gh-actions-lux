import { a as createGitHubActionsHandle } from './handle-BMApqLSP.js';
import 'os';
import 'crypto';
import 'fs';
import 'path';
import 'http';
import 'https';
import 'net';
import 'tls';
import 'events';
import 'assert';
import 'util';
import 'stream';
import 'buffer';
import 'querystring';
import 'stream/web';
import 'node:module';
import 'worker_threads';
import 'perf_hooks';
import 'util/types';
import 'async_hooks';
import 'console';
import 'url';
import 'zlib';
import 'string_decoder';
import 'diagnostics_channel';
import 'child_process';
import 'timers';
import 'tty';
import 'fs/promises';

async function run_post(handle) {
    const env = handle.getEnv();
    const cache = handle.getCache();
    const version = env.getVersionInput();
    await cache.save(version);
}

const handle = createGitHubActionsHandle();
/* istanbul ignore next */
run_post(handle);
//# sourceMappingURL=index_post.js.map
