import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

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

  // before component gets rendered, sync firebase with it
  // client and server sync together
  // this runs right before <app> is rendered
  componentWillMount(){
    this.ref = base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });

    // check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if (localStorageRef){
      // if exists in localStorage, update App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  // remove listening to changes in states when we change the page
  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  // run when new props or state is received
  componentWillUpdate(nextProps, nextState){
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
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

        <Order params={this.props.params} fishes={this.state.fishes} order={this.state.order}/>
        {/* passing the function down to child as props */}
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
