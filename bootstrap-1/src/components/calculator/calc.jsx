/* eslint-disable no-unused-vars */
import Heading from "../Heading";
import CalcButon from "./buttons";
import styles from "./calc.module.css";

export default function Calc() {
    let arrCalc = [[1, 2, 3, "+"], [4, 5, 6, "-"], [7, 8, 9, "*"], [".", 0, "=", "/"], ["(", ")", "AC", "%"]]
    return (
        <div className="container">
            <Heading heading={"Simple Calculator"} />
            <div className="container-fluid w-50">
                <div className="row gx-3 justify-content-center my-3 my-3">
                    <div className="col-12">
                        <div className="input-group mb-3 border border-1 border-secondary">
                            <span className="input-group-text" id="inputGroup-sizing-default">Result :</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"></input>
                        </div>
                    </div>
                </div>
                {arrCalc.map((row, rowIndex) => (
                    <div key={rowIndex} className="row gx-3 justify-content-center my-3">
                        {row.map((s, columnIndex) => (
                            <CalcButon key={columnIndex} columnIndex={columnIndex} s={s} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
