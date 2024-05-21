/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => { },
    deletePost: () => { },
};

const PostList = createContext(DEFAULT_CONTEXT);

const reducerFunction = (currentPostList, action) => {
    switch (action.type) {
        case 'ADD_POST':
            return [...currentPostList, action.payload];
        case 'DELETE_POST':
            return currentPostList.filter(post => post.id !== action.payload.id);
        default:
            return currentPostList;
    }
};

function PostListProvider({ children }) {
    const [postList, postdispatch] = useReducer(reducerFunction, defaultPost);

    const addPost = (post) => {
        postdispatch({ type: 'ADD_POST', payload: post });
    };

    const deletePost = (post) => {
        postdispatch({ type: 'DELETE_POST', payload: post });
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostList.Provider>
    );
}

export { PostList, PostListProvider };
export default PostListProvider;
const defaultPost=[
    {
        id:1,
        title: "Card title 1",
        desc : "Some quick example text to build on the card title and make up the bulk of the card's content",
        date : "10/23/2024",
        author : "SampleBoi",
        likes:20,
        tags : ["cars","bikes","porsche"]
    },
    {
        id:1,
        title: "Card title 1",
        desc : "Some quick example text to build on the card title and make up the bulk of the card's content",
        date : "10/23/2024",
        author : "SampleBoi",
        likes:20,
        tags : ["cars","bikes","porsche"]
    },
    {
        id:1,
        title: "Card title 1",
        desc : "Some quick example text to build on the card title and make up the bulk of the card's content",
        date : "10/23/2024",
        author : "SampleBoi",
        likes:20,
        tags : ["cars","bikes","porsche"]
    }
];