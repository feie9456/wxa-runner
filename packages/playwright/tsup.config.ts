import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['cjs', 'esm'],
  platform: 'node',
  target: 'node18',
  dts: true,
  sourcemap: true,
  external: ['@playwright/test', '@feie9456/wxa-runner-core']
});
