const api = window.location.host.includes('localhost') ? 'http://farazs-mbp:3000' : '';
export class ApiConstant {
  public static SERVER_PATH = api + '/api';
  public static SOCKET_PATH = api;
}
