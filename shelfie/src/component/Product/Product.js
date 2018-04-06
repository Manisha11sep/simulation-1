import React, { Component } from 'react';
import axios from 'axios';


export default class Product extends Component {
  
    deleteProduct(product_id){
        console.log("in delete post" +product_id);
        axios.delete(`/api/product/${product_id}`).then(results =>{
          this.setState({inventory: results.data});
        })
      }
    render(){
        console.log("Props inside product" +JSON.stringify(this.props))
        const {product_id, imageUrl,name, price} = this.props.list;

    return(
    
        <div>
            <div key={product_id}>
            <img src = {imageUrl}alt="My Image" height="300" width="220"/> 
            <p> <b> Product name : {name}</b> </p>

            <p> <b>Price : {price} </b> </p>
            <button className="button" onClick={ () => this.deleteProduct(product_id) } >Delete</button> 
      {/* <button className="button" onClick ={() => {this.setState({edit: true})}}> Edit</button> */}
            </div>
    </div>
)
}
}

