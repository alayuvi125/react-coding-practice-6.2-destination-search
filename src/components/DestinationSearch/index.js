// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    console.log(destinationsList)

    const searchResults = destinationsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Destination Search</h1>
        <div className="search-box-container">
          <input type="search" onChange={this.onChangeSearchInput} />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="image"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachItem => (
            <DestinationItem destinationsList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
