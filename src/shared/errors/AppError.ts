export default class AppError {
  public readonly message: string;
  public readonly statuscode: number;

  constructor(m: string, s = 400) {
    this.message = m;
    this.statuscode = s;
  }
}
