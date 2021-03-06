export function debance(func, delay) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = clearTimeout(() => {
      func.apply(this, args)
    }, delay)

  }
}
export function formatDate(date, format) {
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    //正则表达式的规则M+
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      let str = o[k] + '';
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return format;
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}