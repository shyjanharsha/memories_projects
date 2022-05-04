import * as api from '../api' //we import like this, we access the api as api.fetchPost
import {CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_ALL_POST, 
  LIKE_POST} from '../constants/actionType'

// Action creators 
//Action creators is a function that returns actions(object)

// const getPost = () => {
//     //action must have type proberty
//     // and data from component
//  const action = { type: 'FETCH_ALL', payload: []}
//  return action
// }

export const getPost = () => async (dispatch) => {
    try{
        const {data} = await api.fetchPosts()
        const action = { type: "FETCH_ALL_POST", payload: data}
        dispatch(action) 
    }catch(error){
        console.log(error)
    }
}

// export const createPost = (post) => async (dispatch) => {
//     console.log(post, "postss")
//     try{
//         const {data} = await api.createPosts(post)
//         console.log(post, "postss")
//         const action = {type: 'CREATE_POST', payload: data}
//         dispatch(action)
//     }catch(error){
//         console.log(error.message)
//     }
// }

export const createPost = (post) => async (dispatch) => {
    try {
      const { data } = await api.createPost(post);
  
      dispatch({ type: "CREATE_POST", payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, post);
      console.log("I am from actionsss data", data)
  
      dispatch({ type: "UPDATE_POST", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  

  export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id)
      dispatch({type: "DELETE_POST", payload: id})
    } catch (error) {
      console.log(error)
    }
  }

  export const likePost = (id) => async (dispatch) => {
    try {
      const { data } = await api.likePost(id);
  
      dispatch({ type: "LIKE_POST", payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
