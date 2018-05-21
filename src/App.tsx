import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <div>
          BMKK!
        </div>
      </BrowserRouter>
    );
  }
}

export default connect()(App);