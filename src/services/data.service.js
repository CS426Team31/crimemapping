import firebase from "../firebase";

const db = firebase.ref("/99099");

class DataDataService {
  getAll() {
    return db;
  }

  create(data) {
    return db.push(data);
  }

  update(key, value) {
    return db.child(key).update(value);
  }

  delete(key) {
    return db.child(key).remove();
  }

  deleteAll() {
    return db.remove();
  }
}

export default new DataDataService();
