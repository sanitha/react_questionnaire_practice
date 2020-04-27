import React from "react"
import "./App.css"

function Product(props) {
    return(
        <div>
            <h3 style={{color: "red"}}>{props.product.name} </h3>
            <p> Price: {props.product.price} <br />
                Details: {props.product.description} </p>
            <div class="star-class"><img src={props.product.star} /></div>
        </div>
    )
}
export default Product
