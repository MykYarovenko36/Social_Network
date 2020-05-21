import Friends from "./Friends";
import { connect } from 'react-redux';


let mapToStateProps = (state) =>{
    return {state: state.FriendsProfile}
};
let mapToStateDispatch = (dispatch) =>{
    return {dispatch : null}
};

const FriendsContainer =  connect (mapToStateProps,mapToStateDispatch)(Friends);

export default FriendsContainer;