
export class CK {
  get(name) {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const arr = document.cookie.match(reg);
    if (Array.isArray(arr) && arr.length) {
      return unescape(arr[2]);
    }
    return null;
  }

  set(name, value, path = '/') {
    document.cookie = `${name}=${escape(value)};path=${path}`;
  }
}

export const ck = new CK();
