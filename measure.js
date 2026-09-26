// measure.js：量长度（基线：一律给零）
export function lengthOf(word) {
  const trimmed = String(word).trim();
  if (trimmed === "") {
    const error = new Error("word is empty after trimming");
    error.code = "E_BAD_WORD";
    throw error;
  }
  return [...trimmed].length;
}
