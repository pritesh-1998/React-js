/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { VscAccount } from "react-icons/vsc";
import { MdDateRange } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from '../store/PostList';
import { GrLike } from "react-icons/gr";


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
                    <div>
                        {/* <hr /> */}
                        <div className="row">
                            <div className="col-md-6">
                                <p className="card-text"><MdDateRange style={{ verticalAlign: 'text-top', marginRight: '10px' }} /> {post.date}</p>
                            </div>
                            <div className="col-md-6">
                                <p className="card-text"><VscAccount style={{ verticalAlign: 'text-top', marginRight: '10px' }} /> {post.author}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="card-text"><GrLike style={{ verticalAlign: 'text-top', marginRight: '10px' }} />{post.likes}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
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
