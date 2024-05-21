/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/header';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import NewPostForm from './components/createPostForm';
import SinglePost from './components/singlePost';
import MainCenterContainer from './components/Container/Container';
import PostContainer from './components/Container/PostContainer';
import PostListProvider from './store/PostList';
import PostListComponent from './components/PostListComponent';

function App() {
    const [selectedTab, setSelectedTab] = useState("Home");
    return (
        <PostListProvider>
            <div className='app-container'>
                <Sidebar selecteTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
                <div className='content'>
                    <Header></Header>
                    <MainCenterContainer>
                        {selectedTab == "Home" ?
                            <PostContainer>
                                <PostListComponent/>
                            </PostContainer> :
                            <NewPostForm></NewPostForm>}
                    </MainCenterContainer>
                    <Footer></Footer>
                </div>
            </div >
        </PostListProvider>
    )
}

export default App
