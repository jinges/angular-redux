/*
 * @Author: 大明冯
 * @Date: 2018-04-11 14:27:48
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-19 22:33:49
 */

import { Currency } from './../models/currency';
import * as currency from './../actions/currency';

export function reducer(state = {}, action: currency.CurrenciesUpdatedAction) {
  switch (action.type) {
    case currency.CURRENCIESUPDATED:
      return action.payload;
    default:
      return state;
  }
}

