import React, { Component } from 'react';
import Product from './../Product/Product';
import App from '../../App';


const Dashboard =({inventory},{deletePost}) =>{
    console.log("inside dashboard"+inventory)
    return(
        <div>
            {
                inventory.map(list =>{
                    return(
                        <Product list ={list} deletePost ={deletePost}/>
                    );
                })}
                <p>inside Dashboard Component</p>
                </div>
    );
};
export default Dashboard ;