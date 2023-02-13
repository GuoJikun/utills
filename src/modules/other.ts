/**下载Blob文件 */
export const downloadByBlob = (blob: Blob, filename = "") => {
  let url = window.URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  let timer = setTimeout(() => {
    link.remove();
    window.URL.revokeObjectURL(link.href);
    clearTimeout(timer);
  }, 100);
};

/**下载 remoteUrl 文件 */
export const downloadByUrl = (uri: string, filename = "") => {
  let link = document.createElement("a");
  link.href = uri;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  let timer = setTimeout(() => {
    link.remove();
    clearTimeout(timer);
  }, 100);
};

/**
 * 生成 uuid
 */
export function uuid(): string {
  var s = [];
  var x = "0123456789abcdef";
  for (let i = 0; i < 36; i++) {
    s[i] = [8, 13, 18, 23].includes(i)
      ? "-"
      : x.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = x.substr((s[19] as any & 0x3) | 0x8, 1);

  var uuid = s.join("");
  return uuid;
}

export default {
  downloadByBlob,
  downloadByUrl,
  uuid,
};
