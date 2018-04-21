/*
 * @Author: 大明冯
 * @Date: 2018-04-11 12:16:03
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-19 23:59:42
 */

import { ActionReducer, Action } from '@ngrx/store';
import * as amount from '../actions/amount';
import { Amount } from './../models/amount';


export function reducer(state = {count: 1, base: 'USD'}, action: amount.AmountChangeAction) {
  switch (action.type) {
    case amount.AMOUNTCHANGE:
      return action.payload;
    default:
      return state;
  }
}
