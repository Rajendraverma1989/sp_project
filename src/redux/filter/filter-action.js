import { filter } from './filter-type'; 
export const selectYear = item => ({
    type: filter.ADD_TO_YEAR,
    payload: item
});

export const selectLaunch = item => ({
    type: filter.ADD_TO_LAUNCH,
    payload: item
});

export const selectLanding = item => ({
    type: filter.ADD_TO_LANDING,
    payload: item
});
