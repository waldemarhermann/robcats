import { Component } from "react";
import SearchList from '../components/SearchList';
import CardList from "../components/CardList";
import Scroll from '../components/Scroll';
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cats: [],
      searchbox: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ cats: data }))
  }

  onSearchChange = (event) => {
    this.setState({ searchbox: event.target.value })
  }

  render() {
    const {cats, searchbox} = this.state;
    const filteredCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchbox.toLowerCase())
    })
    return !cats.length ?
      <h1>Loading...</h1> :
      (
        <div className="tc">
          <h1 className="f1">RoboCats</h1>
          < SearchList searchChange={this.onSearchChange} />
          < Scroll >
            < ErrorBoundry>
              < CardList catCats={filteredCats} />
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }
}

export default App;

