/*
 * @Author: 大明冯
 * @Date: 2018-04-11 12:16:03
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-12 11:15:28
 */

import { ActionReducer, Action } from '@ngrx/store';
import * as amount from '../actions/amount';

export function reducer(state: number = 1, action: amount.AmountChangeAction) {
  switch(action.type) {
    case amount.AMOUNTCHANGE:
      return action.payload;
    default:
      return state
  }
}
