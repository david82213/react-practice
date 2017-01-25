import React from 'react';

class StorePicker extends React.Component{
  render() {
    // return React.createElement('p', {className: 'Testing'}, 'Hello');
    // jsx below
    return (
      <form className="store-selector">
        {/* Comment */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store 👉</button>
      </form>
    )
  }
}

export default StorePicker;
