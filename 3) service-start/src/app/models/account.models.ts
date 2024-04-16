export class AccountModels{
  private _name:string;
  private _status:string;


  constructor(name: string, status: string) {
    this._name = name;
    this._status = status;
  }


  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get status(): string {
    return this._status;
  }

  set status(value: string) {
    this._status = value;
  }

}
