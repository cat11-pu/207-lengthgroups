// app.js：渲染结果
import { lengthOf } from "./measure.js";
import { groupByLength } from "./groups.js";

export function render(spec) {
  const words = spec.words || [];
  const view = groupByLength(words);
  const groups = view.groups || [];
  const counts = view.counts || [];
  return { lengths: view.lengths || [], groups: groups, counts: counts,
           count: (view.lengths || []).length, longest: view.longest || 0,
           word_count: words.length,
           total_ok: counts.reduce((sum, item) => sum + item, 0) === words.length };
}
