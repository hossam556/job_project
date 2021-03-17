import * as actionTypes from './actionTypes';

export const weeklyHandler =()=>{
    return{
        type : actionTypes.WEEKLY_HANDLER
    }
};

export const monthlyHandler =()=>{
    return{
        type : actionTypes.MONTHLY_HANDLER
    }
};

export const yearlyHandler =()=>{
    return{
        type : actionTypes.YEARLY_HANDLER
    }
};

export const showSelectList =()=>{
    return{
        type : actionTypes.SHOW_SELECT_LIST
    }
};