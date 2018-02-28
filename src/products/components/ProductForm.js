import React, { Component } from 'react';

class ProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.getState(this.props);
  }

  
  componentWillReceiveProps(nextProps) {
    const state = this.getState(nextProps);
    this.setState(state);
  }

  getState({ match, products, productSelector }) {
    const product = productSelector(products, parseInt(match.params.id, 10));
    return {
      product: {
        title: '',
        ...product
      }
    };
  }
  
  onChange(e) {
    const field = e.target.name;
    const product = this.state.product;
    product[field] = e.target.value;

    this.setState({
      product
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const { product } = this.state;
    this.props.onSave(product)
  }
  
  render() {
    const { title } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <form>
          <label htmlFor='title'>Product name</label>
          <input 
            type="text" 
            name='title'
            value={this.state.product.title}
            onChange={this.onChange.bind(this)} />
          <br/>
          
          <input type="submit" onClick={this.onSubmit.bind(this)} value={'Save'}/>
        </form>
      </div>
    );
  }
}

export default ProductForm;