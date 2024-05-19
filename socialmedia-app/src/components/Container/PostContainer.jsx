/* eslint-disable react/prop-types */
import styles from "./postcontainer.style.module.css";
const PostContainer = (props) => {
    return <div className={styles.PostContainer}>
        {props.children}
    </div>
};

export default PostContainer;