import storage from "./localStorage";

storage.getLocal();

const baseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appsEndpoint = '/apps';
const appIdEndpoint = `/${storage.appId}`;
const booksEndpoint = '/books';
const itemIdEndpoint = (id) => `/${id}`;

export {
  baseURL, appsEndpoint, appIdEndpoint, booksEndpoint, itemIdEndpoint,
};
