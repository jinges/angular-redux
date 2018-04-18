import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AmountChangeAction } from './../actions/amount'
import { CurrenciesUpdateAction } from './../actions/currency';
import { Currency } from './../models/currency';

import * as fromRoot from './../reducers';
import { Observable } from "rxjs/Observable";
import CurrencyName from './../currencyName';
import { CurrenctAttrite } from './../models/currencyName';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  title = 'app';
  public amount$: Observable<number>;
  public currencyRates$: Observable<Currency[]>;
  public currencyName$: CurrenctAttrite = CurrencyName;
  public currencyNames$ = Object.keys(CurrencyName).map(key => { return { key, name: CurrencyName[key]}});
  public currencyIn: string = 'USD';
  public currencyOut: string = 'CNY';

  constructor(public store: Store<fromRoot.State>) {
    this.amount$ = store.select(fromRoot.getAmountState);
    this.currencyRates$ = store.select(fromRoot.getCurrencyRates);
  }

  onAmountChange(amount: string) {
    const number = parseFloat(amount);
    if (!isNaN(number)) {
      this.store.dispatch(new AmountChangeAction(number))
    }
  }

  ngOnInit() {
    this.store.dispatch(new CurrenciesUpdateAction());
  }

  changeCurrencyIn(val): void {
    this.currencyIn = val;
  }
  changeCurrencyOut(val): void {
    this.currencyOut = val;
  }
  changeTrans(): void {
    const defaultVal = this.currencyIn;
    this.currencyIn = this.currencyOut;
    this.currencyOut = defaultVal;
  }
}