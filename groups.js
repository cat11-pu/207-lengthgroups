// groups.js：分组（基线：一律给空表）
import { lengthOf } from "./measure.js";

export function groupByLength(words) {
  const buckets = new Map();
  let wordCount = 0;
  for (const raw of words) {
    const word = String(raw).trim();
    const size = lengthOf(raw);
    let bucket = buckets.get(size);
    if (!bucket) {
      bucket = [];
      buckets.set(size, bucket);
    }
    bucket.push(word);
    wordCount += 1;
  }
  const lengths = [...buckets.keys()].sort((a, b) => a - b);
  const groups = lengths.map((size) => buckets.get(size));
  const counts = groups.map((bucket) => bucket.length);
  const longest = lengths.length ? lengths[lengths.length - 1] : 0;
  return { lengths, groups, counts, longest };
}
