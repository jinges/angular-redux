import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { Currency } from './../models/currency';

// import 'rxjs/add/operator/map';
// import * as _ from 'lodash';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getRates(): Observable<Currency[]> {
    return this.http.get('https://api.fixer.io/latest?base=USD').map((result: {rates: Object, base: String, date: String}) => {
      debugger
      return Object.keys(result.rates).map((key, index) =>{
        return { code: key, value: result.rates[key]};
      })
    })
  }

}
