import React from 'react'

class SearchBar extends React.Component {

    handleChange = event => {
        this.props.setQueryProp(event.target.value)
    }

    handleCheck = event => {
        this.props.setCheckbox(event.target.checked)
    }

    render(){
        // console.log(this.props.query)
      return (
        <div className="SearchBar">
          <input
          type="text"
          name="query"
          //can remove this line (below)?
          value={this.props.query}
          onChange={this.handleChange}
          />
          <label>
          Only show products in stock
          <input
            name="inStock"
            type="checkbox"
            value={this.props.boxChecked}
            onChange={this.handleCheck} />
        </label>
        </div>
      );
    }
  }

  export default SearchBar