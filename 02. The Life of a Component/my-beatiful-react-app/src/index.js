import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>My name is {this.props.name}</div>
    );
  }
}

ReactDOM.render(
	React.createElement(Contacts, {
		name: "Bob",
	}),
		document.getElementById("root")
	);
registerServiceWorker();
