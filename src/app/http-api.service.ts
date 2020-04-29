import { Injectable } from '@angular/core';
import { VersionResponse } from './version-response'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class HttpAPIService {

  constructor(private http:HttpClient) { }

  getVersion():Observable<VersionResponse>
  {
    return this.http.get<VersionResponse>('https://test.xiaoyaoxinli.com/api/tw/Version',{
      headers: new HttpHeaders().set('Access-Control-Allow-Headers','*')});
  }
 
}