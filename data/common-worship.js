/*
 * Common Worship Daily Prayer lectionary adapter.
 *
 * The architecture is intentionally present before the copyrighted Table 1 / Table 2
 * dataset is imported. Do not silently fall back to another reading plan: that would
 * make the displayed appointment look authoritative when it is not.
 */
export const COMMON_WORSHIP_AVAILABLE = false;

export function getCommonWorshipReadings() {
  throw new Error('Common Worship Daily Prayer readings are not yet available in this build.');
}
