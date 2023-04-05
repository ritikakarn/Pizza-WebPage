import { useState, useEffect } from "react";
import axios from "axios";
function OrderPizza() {
    const [myData, setMyData] = useState([]);
    useEffect(() => {
         axios.get("http://localhost:7000/pizza").then((res) => {
            console.log(res.data);
            setMyData(res.data)

        })

    }, [])
    return (
        <>
            <div className="outline">
                <div className="grid">
                    {myData.map((post) => {
                        // const { id, type, price, name, image, description, ingredients, topping } = post;
                        return <div className="" key={post.id}>
                            <div className="card">
                                <img src={post.image} alt='' />
                                <button className="btn btn-warning">Add to cart</button>
                            </div>
                            <div className="details">
                                <h6>{post.name}</h6>

                                <button style ={{height:"24px",width:"20px"}}className={(post.type==='veg'? "btn btn-success": 'btn btn-danger')} type="button"/>
                                
                                <h6>₹{post.price}.00</h6>
                            </div>
                            <div className="list">
                                <p>{post.description}</p>
                                <h6>Ingredient:</h6>
                                <p>{post.ingredients}</p>
                                <h6>Topping:</h6>
                                <p>{post.topping}</p>
                            </div>

                        </div>

                    })}
                </div>
                <p className="copy">Copyrights @ 2017 Pizzeria. All rights reserved</p>
            </div>
        </>

    )



}

export default OrderPizza;