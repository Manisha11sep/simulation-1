import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Form extends Component {
constructor(){
  super();
  this.state ={
 imageUrl:'',
 productName:'',
  price: '',

}
this.createProduct = this.createProduct.bind( this );
}


updateImageUrl(event){
  this.setState({imageUrl:event.target.value});
  console.log("in state "+this.state.imageUrl);
}
updateProductName(text){
console.log(text);
this.setState({productName:text});
}
updatePrice(text){
console.log(text);
this.setState({price:text});
}

resetValues(){
this.setState({imageUrl:'', 
productName:'',
 price:''});
}


createProduct(){
  console.log("inside createproduct" + JSON.stringify(this.props.text));
  this.props.createProduct(this.state.text);
}


  render() {
    const {text } =this.state;
    console.log(this.props);
    return (
      <div className="App">
        <p>
          Inside Form Component.

<div>

<input className='info-box' placeholder ="Enter Image Url"
value = {text}
onChange={this.updateImageUrl}/>

<input className='info-box' placeholder ="Enter product name"
value = {text}
onChange={(e) =>this.updateProductName(e.target.value)}
/>

<input className='info-box' placeholder ="Enter the price"
value = {text}
onChange={(e) =>this.updatePrice(e.target.value)}
/>

     <button onClick={ this.resetValues}> Cancel </button>
     <button onClick ={this.createProduct}> Add to Inventory </button>
 </div>


        </p>
      </div>
    );
  }
}

export default Form ;