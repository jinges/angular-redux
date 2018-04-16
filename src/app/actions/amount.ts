/*
 * @Author: 大明冯
 * @Date: 2018-04-10 17:06:10
 * @Last Modified by: 大明冯
 * @Last Modified time: 2018-04-12 10:47:15
 */


import { Action } from '@ngrx/store';

export const AMOUNTCHANGE = '[Amount] Change';

export class AmountChangeAction implements Action {
  type = AMOUNTCHANGE;
  constructor(public payload: number){
    this.payload = payload;
  }
}
