import React, { Component } from 'react';
import Layout from "./comps/presentational/Layout/Layout";
import Builder from "./comps/presentational/Builder/Builder";


class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Builder />
        </Layout>
      </div>
    );
  }
}

export default App;
