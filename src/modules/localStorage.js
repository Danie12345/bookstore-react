import { baseURL } from './endpoints';

import BookstoreService from '../services/BookstoreService';

class LocalStorage {
  constructor(url, key) {
    this.baseUrl = url;
    this.endPointKey = key;
    this.appId = '';
  }

  setAppId(data) {
    this.appId = data;
  }

  getAppId() {
    return this.appId;
  }

  createApp() {
    BookstoreService.createApp().then(
      (result) => { this.appId = result.data; this.setLocal(); }
    );
  }

  setLocal() {
    localStorage.setItem(this.endPointKey, this.appId);
  }

  getLocal() {
    if (localStorage.getItem(this.endPointKey) === null) {
      this.createApp();
    } else {
      this.appId = localStorage.getItem(this.endPointKey);
    }
  }
}

const storage = new LocalStorage(baseURL, 'app-endpoint');

export default storage;
