/* eslint-disable react/prop-types */
export default function Alert({ title }) {
    return <>
        <div className="alert alert-primary" role="alert">
            {title}
        </div>
    </>
}