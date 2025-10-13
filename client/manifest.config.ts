import { defineManifest } from '@crxjs/vite-plugin'

export default defineManifest({
  manifest_version: 3,
  name: 'ThreadBet',
  version: '1.0.0',
  description: 'ThreadBet',
  action: {
    default_popup: 'index.html',
  }
})
