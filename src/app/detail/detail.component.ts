import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AmountChangeAction } from './../actions/amount'
import { CurrenciesUpdateAction } from './../actions/currency';
import { Currency } from './../models/currency';

import * as fromRoot from './../reducers';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public amount$: Observable<number>;
  public currencyRates$: Observable<Currency[]>;

  constructor(public store: Store<fromRoot.State>) {
    this.amount$ = store.select(fromRoot.getAmountState);
    this.currencyRates$ = store.select(fromRoot.getCurrencyRates);
  }

  ngOnInit() {
    // this.store.dispatch(new CurrenciesUpdateAction());
  }

}
