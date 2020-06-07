import React from 'react';
import { observer } from 'mobx-react';
import './App.css';
import { LoginForm } from './components/LoginForm';

@observer
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LoginForm />
      </div>
    );
  }
}

export default App;
