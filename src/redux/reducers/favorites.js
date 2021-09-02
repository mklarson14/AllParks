// favorites reducer function that takes a state parameter and an action parameter
export function favorites(state = [], action) {
    switch (action.type) {
        case "SAVE_PARK":
            return [ ...state, action.park ]
            
        case "REMOVE_PARK":
            return state.filter(park => {return park.parkCode!== action.park.parkCode})
            

        default:
            return state;
        

    }
}
