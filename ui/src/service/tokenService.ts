export class tokenService {
  private static readonly key = "security_token";

  static create(value: string) {
    if (value) window.localStorage.setItem(tokenService.key, value);
  }

  static get() {
    const jwt = window.localStorage.getItem(tokenService.key);
    if (jwt) {
      const payload = jwt.split(".")[1];
      const payloadJson = JSON.parse(atob(payload));
      const expTimeUnix = payloadJson.exp * 1000;
      const now = Date.now();

      if (now > expTimeUnix) {
        this.remove();
        return null;
      }
      return jwt;
    }
    return jwt;
  }

  static remove() {
    window.localStorage.removeItem(tokenService.key);
  }
}
