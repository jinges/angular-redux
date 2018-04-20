/*
 * @Author: 大明冯
 * @Date: 2018-04-11 17:41:02
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-18 17:35:58
 */

import { CurrenciesUpdatedAction } from './../actions/currency';
import { CurrencyService } from './../services/currency.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
// https://blog.nextzy.me/manage-action-flow-in-ngrx-with-ngrx-effects-1fda3fa06c2f
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
        .getRates('CNY')
        .map(data => new CurrenciesUpdatedAction(data))
    )

    constructor(private currencyService: CurrencyService, private actions$: Actions){}
}
