const NewPostForm = () => {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Add New Post</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="postTitle" placeholder="Enter post title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="postTitle" className="form-label">Date</label>
                    <input type="date" className="form-control" id="postDate" placeholder="Enter post title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="postContent" className="form-label">Content</label>
                    <textarea className="form-control" id="postContent" rows="5" placeholder="Write your post content here"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="postTags" className="form-label">Tags</label>
                    <input type="text" className="form-control" id="postTags" placeholder="Enter tags separated by commas" />
                </div>
                <div className="mb-3">
                    <label htmlFor="postImage" className="form-label">Upload Image</label>
                    <input className="form-control" type="file" id="postImage" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
export default NewPostForm;
