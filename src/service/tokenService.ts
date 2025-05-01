export class tokenService {
  private static readonly key = "security_token";

  static create(value: string) {
    window.localStorage.setItem(tokenService.key, value);
  }

  static get() {
    return window.localStorage.getItem(tokenService.key);
  }

  static remove() {
    window.localStorage.removeItem(tokenService.key);
  }
}
