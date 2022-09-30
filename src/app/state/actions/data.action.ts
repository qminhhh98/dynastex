import {createAction, props} from "@ngrx/store";
import {Data} from "../model/data.model";
const GET_DATA = 'GET DATA';
const GET_DATA_SUCCESS = 'GET DATA SUCCESS';
const GET_DATA_ERROR = 'GET DATA ERROR';
const ADD_DATA = 'ADD DATA';
const ADD_DATA_SUCCESS = 'ADD DATA SUCCESS';
const ADD_DATA_ERROR = 'ADD DATA ERROR';

export const getData = createAction(GET_DATA);

export const getDataSuccess = createAction(
  GET_DATA_SUCCESS,
  props<{data: Data[]}>()
);

export const getDataError = createAction(
  GET_DATA_ERROR,
  props<{error: Error}>()
)

export const addData = createAction(ADD_DATA,
  props<{data: Data}>()
);

export const addDataSuccess = createAction(ADD_DATA_SUCCESS,
  props<{newData: Data}>()
)

export const addDataError = createAction(ADD_DATA_ERROR,
  props<{error: Error}>()
  )
