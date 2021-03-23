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

export const chooseDate =(date)=>{
    return{
        type : actionTypes.CHOOSE_DATE,
        date : date
    }
};
export const calendarDaily =()=>{
    return{
        type : actionTypes.CALENDAR_dAILY
    }
};

export const calendarMonthly =()=>{
    return{
        type : actionTypes.CALENDAR_MONTHLY
    }
};

export const calendarYearly =()=>{
    return{
        type : actionTypes.CALENDAR_YEARLY
    }
};

export const chooseYear =(date2)=>{
    return{
        type : actionTypes.CHOOSE_YEAR,
        date2 : date2
    }
};