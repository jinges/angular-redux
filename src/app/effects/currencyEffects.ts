/*
 * @Author: 大明冯
 * @Date: 2018-04-11 17:41:02
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-12 10:51:29
 */

import { CurrenciesUpdatedAction } from './../actions/currency';
import { CurrencyService } from './../services/currency.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as currency from '../actions/currency';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CurrencyEffects {
  @Effect()
  update$: Observable<Action> = this.actions$
    .ofType(currency.CURRENCIESUPDATE)
    .switchMap(()=>
      this.currencyService
        .getRates()
        .map(data => new CurrenciesUpdatedAction(data))
    )

    constructor(private currencyService: CurrencyService, private actions$: Actions){}
}
