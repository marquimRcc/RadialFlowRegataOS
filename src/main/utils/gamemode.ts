// SPDX-FileCopyrightText: 2026 Regata OS Team
// SPDX-License-Identifier: MIT

import { execSync } from 'node:child_process';

/**
 * Checks whether GameMode is currently active on Regata OS.
 * When active, games are in focus and require uninterruptible input.
 */
export function isGameModeActive(): boolean {
  try {
    const status = execSync('gamemoded -s 2>/dev/null', { timeout: 150, encoding: 'utf-8' });
    return status.toLowerCase().includes('is active');
  } catch {
    return false;
  }
}
