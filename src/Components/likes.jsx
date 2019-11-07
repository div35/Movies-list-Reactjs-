import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Likes = props => {
    let classes = "fa fa-heart";
    if(!props.likes){
        classes=classes + "-o";
        // console.log(classes);
    }
    return <i onClick = {props.onClick} className = {classes} ></i>;
};

export default Likes;