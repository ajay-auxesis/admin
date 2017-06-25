export class AppSettings {
//http://localhost:25704/
//http://cashaa.team3d.in/api/
    public static get API_ENDPOINT(): string { return 'http://localhost:25704/api/'; }
 //public static get API_ENDPOINT(): string { return 'http://cashaa.team3d.in/api/'; }
 public static get localtokenkey(): string { return '_cashaacryptoAcessToken'; }
  //public static get HubUrl(): string { return 'http://cashaa.team3d.in/signalr'; }
  public static get HubUrl(): string { return 'http://localhost:25704/signalr'; }



}
