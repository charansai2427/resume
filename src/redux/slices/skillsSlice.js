import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuid } from "uuid";

const skillsSlice =createSlice ({
    name:'Skills',
    initialState:{
        value:[]
    },

    reducers:{
        add:( state , action) =>{
            state.value.push({
                id:uuid().split('-').join(''),
                label : 'Skills',
                link:''
            });
        }
    }
})