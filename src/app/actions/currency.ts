/*
 * @Author: 大明冯
 * @Date: 2018-04-10 17:19:15
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-12 10:49:11
 */

import { Action } from '@ngrx/store';
import { Currency } from '../models/currency';

export const CURRENCIESUPDATE = '[Currency] UpdateAll';
export const CURRENCIESUPDATED = '[Currency] UpdatedAll';

export class CurrenciesUpdateAction implements Action {
  type = CURRENCIESUPDATE
}

export class CurrenciesUpdatedAction implements Action {
  type = CURRENCIESUPDATED;

  constructor (public payload: Currency[]) {}
}

