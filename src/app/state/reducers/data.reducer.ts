import {Data} from "../model/data.model";
import {createReducer, on} from "@ngrx/store";
import {addData, getData, getDataError, getDataSuccess} from "../actions/data.action";

export interface DataState {
  error: any;
  data: Array<Data>
}

const initialState: DataState = {
  error: null,
  data: [],
};


export const dataReducer = createReducer(
  initialState,
  on(getData, (state) => {

    console.log('reducer', 'getdata')
    return {
      ...state,
      ...initialState
    }
  }),
  on(getDataSuccess, (state, action) => {

    console.log('reducer', 'getDataSuccess')
    return {
      ...state,
      error: null,
      data: action.data,
    }
  }),
  on(getDataError, (state, action) => ({
    error: action.error,
    data: [],
  })),

  on(addData, (state, action) => {

    console.log('reducer', 'addData')
    
    return {
      ...state,
      data: [...state.data, action.data]
    }
  })
);
