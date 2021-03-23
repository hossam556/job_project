import * as actionTypes from '../actions/actionTypes';

const initialState ={
  weekly : true ,
  monthly : false ,
  yearly : false,
  showSelectList : false,
  date : 'August',
  date2 : '2020',
  choosenYear :false ,
  cDay : true,
  cMonth : false,
  cYear : false ,
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
                    
            };
        case actionTypes.CALENDAR_YEARLY :
           return{
                   ...state ,
                   cDay : false,
                   cMonth : false,
                   cYear : true
                      
              };     
        case actionTypes.CALENDAR_dAILY :
            return{
                 ...state ,
                 cDay : true,
                 cMonth : false,
                 cYear : false
                                      
            };
         case actionTypes.CALENDAR_MONTHLY :
             return{
                  ...state ,
                  cDay : false,
                  cMonth : true,
                  cYear : false
                     
             };
        case actionTypes.CHOOSE_YEAR :
           return{
                ...state ,
                date2 : action.date2,
                   
           };                                                                              
        default : return state ;    
    }
}

export default reducer;