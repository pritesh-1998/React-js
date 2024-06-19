/* eslint-disable no-unused-vars */
import { useContext } from "react";
import SinglePost from "./singlePost";
import { PostListContext } from "../store/PostList";
const PostListComponent = () => {
    const { postList } = useContext(PostListContext);

    return <>
        {postList.map((post, index) => (
            <SinglePost key={post.id} post={post}></SinglePost>

        ))}
    </>
}
export default PostListComponent;