class ServerModels{
  private _statusServer:boolean = false;


  get statusServer(): boolean {
    return this._statusServer;
  }

  set statusServer(value: boolean) {
    this._statusServer = value;
  }
}
