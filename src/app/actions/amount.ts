/*
 * @Author: 大明冯
 * @Date: 2018-04-10 17:06:10
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-19 22:28:54
 */


import { Action } from '@ngrx/store';
import { Amount } from './../models/amount';

export const AMOUNTCHANGE = '[Amount] Change';
export const BASECURRENCYCHANGE = '[BaseCurrency] Change';

export class AmountChangeAction implements Action {
  type = AMOUNTCHANGE;
  constructor(public payload: Number) {
    this.payload = payload;
  }
}

export class BaseCurrencyChangeAction implements Action {
  type = BASECURRENCYCHANGE;
  constructor(public payload: String) {
    this.payload = payload;
  }
}

export type Actions = AmountChangeAction | BaseCurrencyChangeAction;
