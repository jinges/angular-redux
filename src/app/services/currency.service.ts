import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { Currency } from './../models/currency';

// import 'rxjs/add/operator/map';
// import * as _ from 'lodash';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getRates(baseCurrency: String): Observable<Currency> {
    return this.http.get(`https://api.fixer.io/latest?base=${baseCurrency}`).map((result: {rates: Object, base: String, date: String}) => {
      return {rates: result.rates};
    });
  }

}
