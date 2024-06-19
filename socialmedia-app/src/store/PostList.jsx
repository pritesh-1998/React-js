/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useReducer } from "react";

const DEFAULT_CONTEXT = {
    postList: [],
    addPost: () => { },
    deletePost: () => { },
};

const PostListContext = createContext(DEFAULT_CONTEXT);

const reducerFunction = (currentPostList, action) => {
    let newPostList;
    switch (action.type) {
        case 'ADD_POST':
            newPostList = [action.payload, ...currentPostList];
            break;
        case 'DELETE_POST':
            newPostList = currentPostList.filter((post) => post.id !== action.payload.postID);
            break;
        default:
            newPostList = currentPostList;
    }
    return newPostList;
};


function PostListProvider({ children }) {
    const [postList, postdispatch] = useReducer(reducerFunction, defaultPost);

    const addPost = (post) => {
        const oldLength = postList.length;
        postdispatch({
            type: 'ADD_POST',
            payload: {
                id: oldLength+1,
                img: `https://dummyimage.com/600x400/000/fff&text=Post+${oldLength}`,
                title: post.postTitle,
                desc: post.postDesc,
                date: post.postDate,
                author: post.postAuthor,
                likes: post.postLikes,
                userId: post.userId,
                tags: post.postTags,
            }
        });
    };
    const deletePost = (postID) => {
        console.log(postID, "---deleted");
        postdispatch({ type: 'DELETE_POST', payload: { postID } });
    };

    return (
        <PostListContext.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostListContext.Provider>
    );
}

export { PostListContext, PostListProvider };
export default PostListProvider;
const defaultPost = [
    {
        id: 1,
        img: "https://dummyimage.com/600x400/000/fff&text=Post+1",
        title: "Exploring the Mountains",
        desc: "A journey through the most breathtaking mountain ranges around the world.",
        date: "05/15/2024",
        author: "John Doe",
        likes: 45,
        userId: 'user1',
        tags: ["travel", "nature", "mountains"]
    },
    {
        id: 2,
        img: "https://dummyimage.com/600x400/000/fff&text=Post+2",
        title: "The Art of Cooking",
        desc: "Discover the secrets behind some of the most delicious dishes from various cuisines.",
        date: "03/22/2024",
        author: "Jane Smith",
        likes: 30,
        userId: 'user2',
        tags: ["food", "cooking", "recipes"]
    },
    {
        id: 3,
        img: "https://dummyimage.com/600x400/000/fff&text=Post+3",
        title: "Tech Innovations in 2024",
        desc: "An in-depth look at the most groundbreaking technological advancements of the year.",
        date: "01/10/2024",
        author: "TechGuru",
        likes: 78,
        userId: 'user3',
        tags: ["technology", "innovation", "gadgets"]
    }
];
