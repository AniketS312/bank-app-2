import React from "react";


function Container(props) {

    return (
        <section className={props.class}>
            {props.children}
        </section>
    )
}


export default Container;