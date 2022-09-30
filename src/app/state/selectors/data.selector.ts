import {DataState} from "../reducers/data.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";



const featureSelectorData = createFeatureSelector<DataState>('dataReducer')

const selectData = createSelector(
  featureSelectorData,
  (state) => {

    console.log('selector get state and return correct props')
    return state.data
  }
)



export default {selectData}
