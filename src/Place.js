import React from "react"

function Place(props) {
    console.log(props);
    return (
        <div>
            <h3 style={{color: "indigo"}}>{props.place.place}</h3>
            <i>Visited : </i><input type="checkbox" checked={props.place.travelled} />
        </div>
    )
}
export default Place;