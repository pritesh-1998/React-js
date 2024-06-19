import { useContext, useRef } from "react";
import { PostListContext } from "../store/PostList";

const NewPostForm = () => {

    const postTitle = useRef();
    const postDate  = useRef();
    const postDesc  = useRef();
    const postTags  = useRef();
    const postlikes = useRef();
    const postImage = useRef();
    const postAuthor = useRef();
    const {addPost} = useContext(PostListContext);
    const handleSubmit = (event) =>{
        event.preventDefault()
        addPost({
            postTitle: postTitle.current.value,
            postDate: postDate.current.value,
            postDesc: postDesc.current.value,
            postAuthor:postAuthor.current.value,
            postTags: postTags.current.value.split(","),
            postLikes: postlikes.current.value,
            postImage: postImage.current.value
        });
    }
    return (
        <>
            <h2 className="my-4">Add New Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="col-7 mb-3">
                        <label htmlFor="postTitle" className="form-label">Title</label>
                        <input type="text" ref={postTitle} className="form-control" id="postTitle" placeholder="Enter post title" />
                    </div>
                    <div className="col-7 mb-3">
                        <label htmlFor="postTitle" className="form-label">Date</label>
                        <input type="date" ref={postDate} className="form-control" id="postDate" placeholder="Enter post title" />
                    </div>
                    <div className="col-7 mb-3">
                        <label htmlFor="postContent" className="form-label">Content</label>
                        <textarea className="form-control" ref={postDesc} id="postContent" rows="5" placeholder="Write your post content here"></textarea>
                    </div>
                    <div className="col-7 mb-3">
                        <label htmlFor="postTags" className="form-label">Tags</label>
                        <input type="text" ref={postTags} className="form-control" id="postTags" placeholder="Enter tags separated by commas" />
                    </div>
                    <div className="col-7 mb-3">
                        <label htmlFor="postAuthor" className="form-label">Author</label>
                        <input type="text" ref={postAuthor} className="form-control" id="postAuthor" placeholder="Enter post title" />
                    </div>
                    <div className="col-7 mb-3">
                        <label htmlFor="postlikes" className="form-label">Likes</label>
                        <input type="number" ref={postlikes} className="form-control" id="postlikes" placeholder="Enter post likes default" />
                    </div>
                    <div className="col-7 mb-3">
                        <label htmlFor="postImage" className="form-label">Upload Image</label>
                        <input className="form-control" type="file" ref={postImage} id="postImage" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </>
    );
}
export default NewPostForm;
