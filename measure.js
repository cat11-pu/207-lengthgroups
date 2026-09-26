// measure.js：量长度（去首尾空白后按字符个数算；去空白后为空报 E_BAD_WORD）
export function lengthOf(word) {
  const text = String(word).trim();
  if (text.length === 0) {
    const error = new Error("E_BAD_WORD: word is empty after trimming");
    error.code = "E_BAD_WORD";
    throw error;
  }
  return text.length;
}
