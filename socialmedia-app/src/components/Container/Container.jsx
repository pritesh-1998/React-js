/* eslint-disable react/prop-types */
import styles from "./style.module.css";
const MainCenterContainer = (props) => {
    return <div className={styles.MainCenterContainer}>
        {props.children}
    </div>
};

export default MainCenterContainer;