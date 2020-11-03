import { filter } from './filter-type';
const INITIAL_STATE ='';
const Filter_Reducer= (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case filter.ADD_TO_YEAR:
                return {
                    ...state,
                    year: action.payload
                };       
        case filter.ADD_TO_LAUNCH:
                return {
                    ...state,
                    launch: action.payload 
                };   
        case filter.ADD_TO_LANDING:
                return {
                    ...state,
                    landing: action.payload
                };   
        default:
            return state;
    }
}
export default Filter_Reducer;