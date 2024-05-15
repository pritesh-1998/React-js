import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import NewPostForm from './components/createPostForm';
import SinglePost from './components/singlePost';



function App() {

    return (
        <div className='app-container'>
            <Sidebar></Sidebar>
            <div className='content'>
                <Header></Header>
                <SinglePost></SinglePost>
                <NewPostForm></NewPostForm>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default App
