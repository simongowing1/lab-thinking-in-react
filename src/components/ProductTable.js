import React from 'react'
import ProductRow from './ProductRow'

class ProductTable extends React.Component {
  
    render(){
        const filteredProducts = this.props.inventory.filter(product =>
            (product.name.toLowerCase()).includes(this.props.query.toLowerCase())
            )

      return (
        <div className="ProductTable">
        {/* console.log(this.props.inventory) */}
            <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <tr>
                <ProductRow 
                    inventory = {this.props.inventory}
                    filteredProducts = {filteredProducts}
                    // query = {this.state.query}
                />
            </tr>
            </table>
        </div>
      );
    }
  }

  export default ProductTable