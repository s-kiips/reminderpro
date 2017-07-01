/**
 * Created by s-k-ii-p-s on 7/1/17.
 */

import {ADD_REMINDER} from '../constants';

export const addReminder=(text)=>{
    const action={
        type: ADD_REMINDER,
        text
    }
    console.log('action in addReminder',action);
    return action;
}