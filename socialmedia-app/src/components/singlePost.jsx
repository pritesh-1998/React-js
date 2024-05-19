import React from 'react';

const SinglePost = () => {


    return (
        <>
            <div className="card my-3" style={{ width: "18rem" }}>
                <img src="https://dummyimage.com/600x400/000/fff" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <hr />
        </>

    );
}

export default SinglePost;
