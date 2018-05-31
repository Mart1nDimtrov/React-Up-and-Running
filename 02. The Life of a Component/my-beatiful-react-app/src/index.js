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
      <div></div>
    );
  }
}

ReactDOM.render(<Contacts/>, document.getElementById('root'));
registerServiceWorker();
