import { createStore, combineReducers } from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
    
let reducers = combineReducers({
   profilePage : profileReducer, 
   dialogsPage : dialogsReducer,
   FriendsProfile : sidebarReducer
});


let store = createStore(reducers);

window.store = store;
export default store;