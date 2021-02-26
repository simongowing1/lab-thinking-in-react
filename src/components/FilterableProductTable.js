import React from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'
import data from '../data.json'

class FilterableProductTable extends React.Component {
    state = {
        query: '',
        boxChecked: false,
        inventory: data.data,
    }

    setQuery = queryParam => {
        this.setState({
          query: queryParam
        })
      }

    setCheckbox = (parameter) => {
        this.setState((state,props) => ({
            boxChecked: parameter
        })) 
    }
  
    render(){
      return (
        <div className="FilterableProductTable">
          <header className="FilterableProductTable-header">
            IronStore
          </header>
          
          <SearchBar
            query = {this.state.query}
            setQueryProp={this.setQuery}
            boxChecked={this.state.boxChecked}
            setCheckbox={this.setCheckbox}
            />

          <ProductTable
              inventory = {this.state.inventory}
              query = {this.state.query}
          />
        </div>
      );
    }
  }

  export default FilterableProductTable