import { createSlice } from "@reduxjs/toolkit";

const toDoSlice= createSlice({
    name:"todolist",
    initialState:{
        allToDO:[]
        
    },
    reducers:{
        addToDo:(state,action)=>{
            state.allToDO.push(action.payload)
           
        },
        removeToDoItem:(state,action)=>{
            return{
                 ...state,
                allToDO: state.allToDO.filter(item=>item!=action.payload)
                }
            
        },
        
    }
})
export const {addToDo,removeToDoItem,completeToDO} = toDoSlice.actions
export default toDoSlice.reducer