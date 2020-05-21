

let initialState = {
  FriendsProfileList :[
        { id: 1, name: 'Dimych', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjdEnyVHV-vTCd7yBM_qoM_TCrXtlWvgNjPfUsjRwTYj-RwNMH&usqp=CAU'},
        { id: 2, name: 'Andrew', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7LAr1HuhuOVxZPKVEE7ltEkhy7U-W6uYF_AiuCaELCW52WF9i&usqp=CAU'},
        { id: 3, name: 'Sveta' , avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7LAr1HuhuOVxZPKVEE7ltEkhy7U-W6uYF_AiuCaELCW52WF9i&usqp=CAU'},
        { id: 4, name: 'Sasha', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKaD06Oj7bYmMALiPHcNA9-dPkQrki4MpbBP3HRKcExCvSDxwJ&usqp=CAU'},
        { id: 5, name: 'Viktor', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7LAr1HuhuOVxZPKVEE7ltEkhy7U-W6uYF_AiuCaELCW52WF9i&usqp=CAU'},
        { id: 6, name: 'Valera', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjfF5uE9bEr17JlB1-s1OMJJAZqZDYIVULBVhL4AVLpvCBfib1&usqp=CAU' } 
    ]     
}

const sidebarReducer = (state = initialState, action) =>{
  return state
};

export default sidebarReducer;