import React, { Component } from 'react';
import ProjetoBase from './components/ProjetoBase/ProjetoBase';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      salario: 0,
    };
  }
  render() {
    return <ProjetoBase />;
  }
}
