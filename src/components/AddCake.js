import React from 'react';
import { Link } from 'react-router-dom';

class AddCake extends React.Component {
  render() {
    return (
      <div>
        <h1>Add a new cake</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default AddCake;
