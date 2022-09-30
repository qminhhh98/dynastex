import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Data} from "../model/data.model";
import {test_data} from "../../common/testdata/SAMPLE_DATA";

@Injectable({
  providedIn: 'root',
})

export class DataService {
  getData(): Observable<Data[]> {
    return of(test_data)
  }

}
