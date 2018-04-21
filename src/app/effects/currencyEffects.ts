/*
 * @Author: 大明冯
 * @Date: 2018-04-11 17:41:02
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-19 23:45:32
 */

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Action, Store } from '@ngrx/store';

import { CurrenciesUpdatedAction } from './../actions/currency';
import { CurrencyService } from './../services/currency.service';
import { Actions, Effect, toPayload } from '@ngrx/effects';
// https://blog.nextzy.me/manage-action-flow-in-ngrx-with-ngrx-effects-1fda3fa06c2f
import * as currency from '../actions/currency';
import * as amount from '../actions/amount';
import { State } from './../reducers';


@Injectable()
export class CurrencyEffects {
  @Effect()
  update$: Observable<Action> = this.actions$
    .ofType(currency.CURRENCIESUPDATE, amount.AMOUNTCHANGE)
    .map(toPayload)
    .withLatestFrom(this.store$.select('amount'))
    .mergeMap(([, {base}]) => {
      const baseCurrency = base;
      return this.currencyService
        .getRates(baseCurrency)
        .map(data => new CurrenciesUpdatedAction(data));
    });

    constructor(
      private currencyService: CurrencyService,
      private actions$: Actions,
      private store$: Store<State>) {}
}
