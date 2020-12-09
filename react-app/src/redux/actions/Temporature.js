import {CURRENTLY} from '../constants/Temporature'

export const currently = (temp) => ({
    type : CURRENTLY,
    temp
})