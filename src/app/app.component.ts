import { Component } from '@angular/core';
import {addData, getData} from "./state/actions/data.action";
import {Store} from "@ngrx/store";
import dataSelector from "./state/selectors/data.selector";
import {Data} from "./state/model/data.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynatex-Website';
  constructor(private store: Store) {}

  selectData$ = this.store.select(dataSelector.selectData)


  ngOnInit(): void {
    this.selectData$.subscribe((x) => {
      console.log(x);
    })
    this.getListData();
  }

  getListData() {
    return this.store.dispatch(getData());
  }

  handleAddNew() {
    const data: Data = {
      id: Math.floor(Math.random() * 100),
      name: 'new data',
      age: Math.floor(Math.random() * 100),
    }

    return this.store.dispatch(addData({data}))
  }
}
