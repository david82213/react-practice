import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
  // constructor(){
  //   // super runs React.Component first then runs custom class and functions
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event){
    // prevent page from refreshing
    event.preventDefault();

    // first grab text from input field
    const value = this.storeInput.value;
    // second, transition from "/" to "/store/:storeID"
  }

  render() {
    // return React.createElement('p', {className: 'Testing'}, 'Hello');
    // jsx below
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        {/* Comment */}
        <h2>Please Enter A Store</h2>
        {/* put a reference to a variable which binds to class*/}
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store 👉</button>
      </form>
    )
  }
}

export default StorePicker;
