/*
 * @Author: 大明冯
 * @Date: 2018-04-11 14:40:58
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-11 18:53:50
 */

import * as fromAmount from './amount';
import * as fromCurrency from './currency';
import { Currency } from './../models/currency';

export const reducers = {
  amount: fromAmount.reducer,
  currencies: fromCurrency.reducer
}

export interface State {
  amount: number;
  currencies: Currency[];
}

export const getAmountState = (state: State)=> state.amount;
export const getCurrencyRates = (state: State)=> state.currencies;
