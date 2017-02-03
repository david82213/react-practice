import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';

class App extends React.Component{
  constructor(){
    super();

    // bind addFish function to App component
    this.addFish = this.addFish.bind(this);

    this.loadSamples = this.loadSamples.bind(this);

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

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          {/* pass in props; like data */}
          <Header tagline="Fresh Seafood Market"/>
        </div>

        <Order />
        {/* passing the function down to child as props */}
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
