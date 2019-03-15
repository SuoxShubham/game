import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state={value:''}
    }
    handleSubmit() {
      this.setState({value:'X'});
    }
    render() {
      return (
        <button className="square" onClick={() =>handleSubmit()}>
          {this.state.value}
        </button>
      );
    }
  }
  export default Square