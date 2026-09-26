// groups.js：按长度分组（同长度一组、组内按出现顺序；长度种类升序；一次扫描 + 映射查重）
import { lengthOf } from "./measure.js";

export function groupByLength(words) {
  const byLength = new Map();
  for (const word of words) {
    const text = String(word).trim();
    const length = lengthOf(word);
    if (!byLength.has(length)) byLength.set(length, []);
    byLength.get(length).push(text);
  }
  const lengths = Array.from(byLength.keys()).sort((a, b) => a - b);
  const groups = lengths.map((length) => byLength.get(length));
  const counts = groups.map((group) => group.length);
  const longest = lengths.length > 0 ? lengths[lengths.length - 1] : 0;
  return { lengths, groups, counts, longest };
}
