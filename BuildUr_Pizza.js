import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
function Build() {
    const [info, setInfo] = useState();
    const [price, setprice] = useState(0);
    const handleChange = (checked, NewPrice) => {
        checked ? setprice((Price) => Price + NewPrice) : setprice((Price) => Price - NewPrice)
    };
    useEffect(() => {
        axios.get("http://localhost:7000/ingredients").then((res) => {
            const infodata = res.data;
            setInfo(infodata);
        });

    }, []);

    return (
        <div className="container">
            <p>Pizzeria now give you options to build your own pizza.Customize your pizza by chossing
                ingredients from the list given below.
            </p>
            <table className="table table-striped table-bordered">
                <tbody>
                    {console.log(info)}
                    {info?.map((datas) => {
                        return (
                            <tr key={datas.id}>
                                <td>
                                    <img src={datas.image}  width={"100px"} style={{marginLeft:"10px"}}/>
                                </td>
                                <td>
                                    {datas.tname} ₹{datas.price}
                                </td>
                                <td>
                                    <div className="check">
                                        <input
                                            className="form-input"
                                            type="checkbox"
                                            id={datas.id}
                                            onChange={(e) => handleChange(e.target.checked, datas.price)} />
                                        <label className="text-warning">
                                            Add Me
                                        </label>
                                    </div>
                                </td>

                            </tr>

                        );

                    })}

                </tbody>

            </table>
            <div id="color">
                <h3 style={{ float: "left"}}>Total Cost:{price} </h3>
            </div>
            <button id="btn"className="btn btn-dark" style={{ marginLeft: "350px", marginTop: "17px" }}>Build Ur Pizza</button>
            <p className="copy">Copyrights @ 2017 Pizzeria.All rights reserved.</p>
        </div>

    );

}

export default Build;
