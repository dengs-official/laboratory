
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

export class UK {
  get(name, decode = true) {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const arr = window.location.search.substr(1).match(reg);
    if (Array.isArray(arr) && arr.length) {
      return decodeURIComponent(unescape(arr[2]));
    }
    return null;
  }
}

export const uk = new UK();
