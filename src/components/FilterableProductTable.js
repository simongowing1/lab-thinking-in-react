import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

class FilterableProductTable extends React.Component {
    state = {
  
    }
  
    render(){
      return (
        <div className="FilterableProductTable">
          <header className="FilterableProductTable-header">
            IronStore
          </header>
          <SearchBar/>
          <ProductTable/>
        </div>
      );
    }
  }

  export default FilterableProductTable