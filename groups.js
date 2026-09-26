// groups.js：分组（基线：一律给空表）
import { lengthOf } from "./measure.js";

export function groupByLength(words) {
  return { lengths: [], groups: [], counts: [], longest: 0 };
}
