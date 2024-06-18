/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { VscAccount } from "react-icons/vsc";
import { MdDateRange } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from '../store/PostList';


const SinglePost = ({ post }) => {
    const Tags = post.tags;
    const { deletePost } = useContext(PostListContext);
    return (
        <>
            <div className="card my-4" style={{ width: "18rem" }}>
                <img src={post.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <span
                        className="position-absolute top-0 start-100 translate-middle btn btn-danger py-1"
                        onClick={() => deletePost(post.id)}
                    >
                        <AiFillDelete /> </span>
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.desc}</p>
                    <p className="card-text"><MdDateRange /> {post.date}</p>
                    <p className="card-text"><VscAccount /> {post.author}</p>
                    <h5 className="card-text">
                        <IoPricetagsOutline />{Tags.map((tag, index) => (
                            <span key={index} className="btn btn-warning m-1 p-2">{tag}</span>
                        ))}
                    </h5>
                </div>
            </div >
            <hr />
        </>
    );
}

export default SinglePost;
