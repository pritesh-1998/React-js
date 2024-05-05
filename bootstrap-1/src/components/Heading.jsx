/* eslint-disable react/prop-types */
import styles from "./Heading.module.css";
export default function Heading({ heading }) {
    return <>
        <h1 className={styles.h1Class}>{heading}</h1>
    </>
}