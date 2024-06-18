/* eslint-disable no-unused-vars */
import { useContext } from "react";
import SinglePost from "./singlePost";
import { PostListContext } from "../store/PostList";
const PostListComponent = () => {
    const { postList } = useContext(PostListContext);
    // console.log(postList);
    return <>
        {postList.map((post, index) => (
            <SinglePost key={post.id} post={post}></SinglePost>

        ))}
        {/* <SinglePost></SinglePost>
        <SinglePost></SinglePost>
        <SinglePost></SinglePost>
        <SinglePost></SinglePost>
        <SinglePost></SinglePost>
        <SinglePost></SinglePost> */}

    </>
}
export default PostListComponent;