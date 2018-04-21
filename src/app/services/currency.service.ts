import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { HttpClient } from '@angular/common/http';
import { Currency } from './../models/currency';

// import 'rxjs/add/operator/map';
// import * as _ from 'lodash';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }

  private oldUrl = 'https://api.fixer.io/latest';
  private url = 'https://data.fixer.io/api/latest?access_key=90ebf9dfb4c884dc22826cddb506ab21';

  getRates(baseCurrency: String): Observable<Currency> {
    return this.http.get(`${this.oldUrl}?base=${baseCurrency}`).map((result: {rates: Object, base: String, date: String}) => {
      return {rates: result.rates};
    });
  }

}
