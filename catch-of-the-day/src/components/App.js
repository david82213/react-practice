import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component{
  constructor(){
    super();

    // bind addFish function to App component
    this.addFish = this.addFish.bind(this);

    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

    // get initial state
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish){
    // update state
    // copy fishes into a new obj
    const fishes = {...this.state.fishes};
    // add in new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;

    // set state
    this.setState({ fishes: fishes });
  }

  loadSamples(){
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder(key){
    // take copy of the state
    const order = {...this.state.order};

    // update or add new number of fish ordered
    order[key] = order[key] + 1 || 1;

    // update the state
    this.setState({ order: order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          {/* pass in props; like data */}
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {/* object.keys return an array */}
            {Object
              .keys(this.state.fishes)
              // for each element, render through Fish component
              // key needs to be unique
              .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
            }
          </ul>
        </div>

        <Order fishes={this.state.fishes} order={this.state.order}/>
        {/* passing the function down to child as props */}
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
