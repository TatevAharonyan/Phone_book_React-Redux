const  initialState = 
     [
        {id: Math.random(),
        firstName:"Ivan",
        lastName: "Zaycev",
        phoneNumber : "+72222222222",
    },{ 
        id:  Math.random(),
        firstName:"Ivan",
        lastName: "Zaycev",
        phoneNumber : "+73333333333",
    }, {
        id:  Math.random(),
        firstName:"Ivan",
        lastName: "Zaycev",
        phoneNumber : "+74444444444",
    }];

 
export const reducer = (state  = initialState, action) =>  {
    switch( action.type ){
        case "ADD":
            return [
                 {
                    id:  Math.random(),
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    phoneNumber:action.payload.phoneNumber,
                    text: action.payload,
                  } ,
                ...state,                  
            ];
        case "CHENGE":
            return state.map(item => item.id === action.payload.id? 
                    {...item,  firstName: action.payload.firstName, 
                        lastName: action.payload.lastName,
                        phoneNumber:action.payload.phoneNumber,
                        text: action.payload,}: item );
        case "REMOVE":
            return state.filter(item => item.id !== action.payload);
         
        default:
            return state;
    }
}