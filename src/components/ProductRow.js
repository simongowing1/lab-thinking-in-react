import React from 'react'

class ProductRow extends React.Component {
  
    render(){
        // console.log(this.props.query)
        const individualProduct = this.props.filteredProducts.map((product) => {
            return(
                <tr>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                </tr>    
            )
          })
          return(
                <div className="ProductRow">
                    {individualProduct}
                </div>
          )
        
    }
}

  export default ProductRow