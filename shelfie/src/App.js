import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';
import axios from 'axios';
import './App.css';
import { Link } from 'react-router-dom';

import routes from './routes';

class App extends Component {
  constructor(){
    super();
      this.state ={
        imageUrl: 'abc',
        productName: '',
        price:'',
        inventory :[],

      };

      this.createProduct = this.createProduct.bind(this);
    
  }

  createProduct(text)
  {
    axios.post('/api/product', {text}).then( results => {
      console.log({text});
      this.setState({ inventory: results.data });
  
    });
  }

  deleteProduct(product_id){
    console.log("in delete post" +product_id);
    axios.delete(`/api/product/${product_id}`).then(results =>{
      this.setState({inventory: results.data});
    })
  }

//   updateImageUrl(text){
//     console.log(text);
//     this.setState({imageUrl:text});
//   }
// updateProductName(text){
//   console.log(text);
//   this.setState({productName:text});
//   }
// updatePrice(text){
//   console.log(text);
//   this.setState({price:text});
// }

// resetValues(){
//   this.setState({imageUrl:'', 
//   productName:'',
//    price:''});
// }

componentDidMount(){
  axios.get('/api/inventory').then(res =>{
    console.log("Value from express "+ JSON.stringify(res.data));
    this.setState({inventory: res.data});
  });
}



  render() {

    const {imageUrl, productName, price} = this.state;
    return (
      <div className="App">
      <div>
    
        <Dashboard inventory ={this.state.inventory} deleteProduct ={this.deleteProduct} />
          <Form  createProduct ={this.createProduct}/>
            <Header/>
            <Link to = "/" > Home </Link>
            </div>
            {/* <div>


       <input className='info-box' placeholder ="Enter Image Url"
       value = {imageUrl}
       onChange={(e) =>this.updateImageUrl(e.target.value)}/>

      <input className='info-box' placeholder ="Enter product name"
      value = {productName}
      onChange={(e) =>this.updateProductName(e.target.value)}
      />

      <input className='info-box' placeholder ="Enter the price"
      value = {price}
      onChange={(e) =>this.updatePrice(e.target.value)}
      />

            <button onClick={ this.resetValues}> Cancel </button>
            <button> Add to Inventory </button>
        </div> */}

      </div>
    );
  }
}

export default App;
