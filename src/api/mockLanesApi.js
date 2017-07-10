import delay from './delay';

const lanes = ['todo', 'doing', 'done', 'pipeline'];


class LanesApi {
  static getAllLanes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], lanes));
      }, delay);
    });
  }
}

export default LanesApi;
