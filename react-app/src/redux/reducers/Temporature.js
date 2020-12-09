import Temporature from '../../temporature'
import {CURRENTLY} from '../constants/Temporature'

const initialState = {
    currentTemporature : 0,       
    maxTemporature : {
        id: "",
        temporature : 0 ,
        location : "none" 
    },  
    minTemporature : {
        id: "",
        temporature : 0 ,
        location : "none" 
    },
    avgTemporature : {
        id: "",
        temporature : 0 ,
        location : "none" 
    },
    temporatures : [ ] /// id,temporature,location 
}

export default (state = initialState, action, temp) => {
    switch (action.type) {
        case CURRENTLY :
            return {...state , currentTemporature: temp}
        default :
            return state
    }
}