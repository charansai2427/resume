import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const websitesSocialSlice = createSlice({
    name: "Websites & Social Sites",
    initialState: {
        value: []
    },
    reducers:{
        add : (state, action) => {
             state.value.push({
                id: uuid().split("-").join(""),
                label : "untitled",
                link : ""
             });
        },
        remove : (state, action) => {
            state.value = state.value.filter(e => e.id !== action.payload);
        },
        modify : (state, action) => {
            state.value = state.value.map(e => {
                if(e.id == action.payload.id){
                    return {
                        ...e,
                        ...action.payload.update
                    }
                }
                return e;
            })
        }               
    }
})

export const {add, modify, remove} = websitesSocialSlice.actions;

export default  websitesSocialSlice.reducer