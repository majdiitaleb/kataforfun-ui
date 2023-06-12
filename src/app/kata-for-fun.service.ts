import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Result} from "./model/result";

@Injectable({
  providedIn: 'root'
})
export class KataForFunService {

  results:Object[];
  loading:boolean;

  constructor(private http: HttpClient, @Inject('SERVER_URL') private serverUrl: string) {
  }

  getConvertedNumber(value: Number): Observable<Result>{
    return this.http.get<Result>(this.serverUrl+"/kata-for-fun/"+value);
  }
}
