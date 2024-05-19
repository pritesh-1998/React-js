/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Children, createContext, useReducer } from "react";

const postList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});
const addPost = () => {

}

const deletePost = () => {

}
function PostListProvider({ children }) {
    const [postList, postdispatch] = useReducer(reducer, PostList);
    return <postList.Provider value={
        postList, addPost, deletePost
    }>
        {children}
    </postList.Provider >
}
export default PostListProvider;