import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";


let store ={
  
    _state : {

        profilesPage:{

                    posts : [
                                { id: 1, message: "Hi, how are you?", likescount: "12" },
                                { id: 2, message: "It's my first post", likescount: "15" },
                                { id: 3, message: "Bla-bla", likescount: "2" },
                                { id: 4, message: "Da-da", likescount: "9" }
                            ],
                    newPostText :''
                    },
        
        
                    dialogsPage:{
                        dialogs : [
                                { id: 1, name: 'Dimych' },
                                { id: 2, name: 'Andrew' },
                                { id: 3, name: 'Sveta' },
                                { id: 4, name: 'Sasha' },
                                { id: 5, name: 'Viktor' },
                                { id: 6, name: 'Valera' }
                            ],
                        messages : [
        
                                { id: 1, message: 'Hi' },
                                { id: 2, message: 'How is  your IT-kamasutra' },
                                { id: 3, message: 'Yo' },
                                { id: 4, message: 'Yo' },
                                { id: 5, message: 'Yo' }
                            ],
                     newMessageBody : ""
                },
        sidebar : {
                    profile :[
                                { id: 1, name: 'Dimych', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjdEnyVHV-vTCd7yBM_qoM_TCrXtlWvgNjPfUsjRwTYj-RwNMH&usqp=CAU'},
                                { id: 2, name: 'Andrew', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7LAr1HuhuOVxZPKVEE7ltEkhy7U-W6uYF_AiuCaELCW52WF9i&usqp=CAU'},
                                { id: 3, name: 'Sveta' , avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7LAr1HuhuOVxZPKVEE7ltEkhy7U-W6uYF_AiuCaELCW52WF9i&usqp=CAU'},
                                { id: 4, name: 'Sasha', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKaD06Oj7bYmMALiPHcNA9-dPkQrki4MpbBP3HRKcExCvSDxwJ&usqp=CAU'},
                                { id: 5, name: 'Viktor', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7LAr1HuhuOVxZPKVEE7ltEkhy7U-W6uYF_AiuCaELCW52WF9i&usqp=CAU'},
                                { id: 6, name: 'Valera', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjfF5uE9bEr17JlB1-s1OMJJAZqZDYIVULBVhL4AVLpvCBfib1&usqp=CAU' } 
                            ]     
                  }},
           
           
            _callSubscriber() {
                console.log('State changed');
            },
        
            getState() {
                debugger;
                return this._state;
            },
            subscribe(observer) {
                this._callSubscriber = observer;  // observer
            },


            dispatch (action) {
              this._state.profilesPage =  profileReducer(this._state.profilesPage, action);
              this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
              this._state.sidebar =  sidebarReducer(this._state.sidebar, action);
              this._callSubscriber(this._state)}
            }
                
                
                
                
            
    


         

    
              
                  
          
            
            
    



window.store = store;

export default store;