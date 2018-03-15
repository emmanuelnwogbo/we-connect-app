export default class UtilityMiddlewares {
  static isEmail(word) {
    let re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(word);
  }

  static isEmpty(word) {
    if (word.replace(/\s/g, '') === '') {
      return false;
    }
    return true;
  }
}
