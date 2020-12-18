import { Component } from "react";
import "./App.css";
import "./components/card-list/car-list.styles.css"
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       monstors:[],
       searchValue:""
    }
  }

  componentDidMount(){

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response=>response.json())
      .then(users=>this.setState({monstors:users}))
  }

  handleChange=(e)=>{
    this.setState({searchValue:e.target.value})
  }

  render(){
    
    const {monstors,searchValue} = this.state
    const filterMonsters = monstors.filter(monster=>
       monster.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox handleChange={this.handleChange} placeholder="search monster"/>
        <CardList monsters = {filterMonsters}/>
      </div>
    );
  }
 
}

export default App;
