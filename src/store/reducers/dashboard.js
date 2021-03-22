import * as actionTypes from '../actions/actionTypes';

const initialState ={
  weekly : true ,
  monthly : false ,
  yearly : false,
  showSelectList : false,
  date : 'August',
  choosenYear :false
};

const reducer= (state = initialState , action)=>{
    switch(action.type){
        case actionTypes.WEEKLY_HANDLER :
            return {
                ...state ,
                weekly:true,
                monthly:false,
                yearly:false,
                showSelectList:false
            };
        case actionTypes.MONTHLY_HANDLER : 
            return {
                ...state ,
                monthly:true,
                weekly:false,
                yearly:false,
                showSelectList:false

            };
        case actionTypes.YEARLY_HANDLER :
            return{
                ...state ,
                yearly:true,
                monthly:false,
                weekly:false,
                showSelectList:false

            } ;
        case actionTypes.SHOW_SELECT_LIST :
            return{
                ...state ,
                showSelectList : !state.showSelectList
                
            } ;
        case actionTypes.CHOOSE_DATE :
            return{
                 ...state ,
                 date : action.date,
                 choosenYear : true
                    
            }                
        default : return state ;    
    }
}

export default reducer;