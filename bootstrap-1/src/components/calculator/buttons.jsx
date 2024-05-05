/* eslint-disable react/prop-types */
export default function CalcButon({ columnIndex, s }) {
    return <>
        <div key={columnIndex} className="col-lg-3 col-md-6">
            <button className="btn btn-outline-secondary px-5">{s}</button>
        </div>
    </>
}