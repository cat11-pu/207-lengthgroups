import assert from "node:assert";
import { lengthOf } from "../measure.js";
import { groupByLength } from "../groups.js";
import { render } from "../app.js";

let failed = 0;
function check(name, fn) {
  try { fn(); console.log("ok " + name); } catch (e) { failed += 1; console.log("FAIL " + name + " :: " + e.message); }
}

check("lengthOf returns a number", () => {
  assert.strictEqual(typeof lengthOf("abc"), "number");
});

check("groupByLength returns lengths", () => {
  assert.ok(Array.isArray(groupByLength(["abc"]).lengths));
});

check("groupByLength returns groups", () => {
  assert.ok(Array.isArray(groupByLength(["abc"]).groups));
});

check("render counts types", () => {
  assert.strictEqual(typeof render({ words: ["abc"] }).count, "number");
});

check("render exposes total flag", () => {
  assert.strictEqual(typeof render({ words: ["abc"] }).total_ok, "boolean");
});

console.log("5 cases, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
