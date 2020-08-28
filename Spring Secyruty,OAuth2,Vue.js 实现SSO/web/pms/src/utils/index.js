import CONFIG from '@/configs/index.js';

// 简化localStorage和sessionStorage操作，保留变量类型信息
export class LS {
  constructor(session = false, prefix = '--', suffix = '--') {
    this.prefix = prefix;
    this.suffix = suffix;
    this.storage = session ? sessionStorage : localStorage;
  }

  _transformKey(key) {
    return this.prefix + key + this.suffix;
  }

  set(key, value) {
    this.storage.setItem(this._transformKey(key), JSON.stringify(value));
  }

  get(key) {
    const item = this.storage.getItem(this._transformKey(key));
    return item === 'undefined' ? undefined : JSON.parse(item);
  }

  remove(key) {
    this.storage.removeItem(this._transformKey(key));
  }

  clear() {
    this.storage.clear();
  }

  key(index) {
    this.storage.key(index);
  }
}
// 添加app名为前缀防止内嵌iframe时相互覆盖
export const ls = new LS(false, `__${CONFIG.name}__`);
export const ss = new LS(true, `__${CONFIG.name}__`);

// cookie utils
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
    document.cookie = `${name}=${escape(value)};path=${path};samesite=none;secure`;
  }
}

export const ck = new CK();

// url utils
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

// date utils
export class DU {
  getTimestamp(date = null, mutation = 0) {
    return Date.parse(date || new Date()) / 1000 + Number(mutation);
  }
}

export const du = new DU();
