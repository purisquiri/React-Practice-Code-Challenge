import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Sushi from './components/Sushi';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    count: 0,
    sushiEaten: [],
    balance: 100
  }

  async componentDidMount() {
    let sushiFetch = await fetch(API)
    let response = await sushiFetch.json()

    this.setState({sushi: response})
  }

  moreSushi = () => {
    let count = this.state.count
    let sushiLenght = this.state.sushi.length
    console.log(count);
    this.setState({count: sushiLenght - 4 > count ? count + 4 : 0})
  }

  handlerEaten = (id, price) => {
  if (this.state.sushiEaten.includes(id) || this.state.balance < price) return  
  this.setState({
    sushiEaten: [...this.state.sushiEaten, id],
    balance: this.state.balance - price
  
  })
    
  }

  moreMoney = (e) => {
    e.preventDefault()
    
    this.setState({balance: this.state.balance + +e.target.money.value})
    e.target.reset()
  }

  render() {

    let sushiData = this.state.sushi.map(sushi => (
      <Sushi 
        handlerEaten={this.handlerEaten}
        sushiEaten={this.state.sushiEaten.includes(sushi.id) }
        sushiId={sushi.id}
        key={sushi.id}
        name={sushi.name} 
        image={sushi.img_url}
        price={sushi.price}
      />
    ))

   
    return (
      <div className="app">
        <SushiContainer 
        
        moreSushi={this.moreSushi}
        sushiData={sushiData.slice(this.state.count, this.state.count + 4)} />
        <Table 
        sushiEaten={this.state.sushiEaten}
        balance={this.state.balance}
        />
        <form onSubmit={this.moreMoney}>
          
          <input type= "number" name="money" placeholder="add money to balance" />
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default App;