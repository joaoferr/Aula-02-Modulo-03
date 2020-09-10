import React, { Component } from 'react';
import { calculateSalaryFrom } from '../../salary';

export default class ProjetoBase extends Component {
  constructor() {
    super();
    this.state = {
      salario: 0,
    };
  }
  handleChange = (salario) => {
    //  console.log(salario.target.value);
    const calculo = calculateSalaryFrom(salario.target.value);
    this.setState({
      baseINSS: calculo.baseINSS,
      discountINSS: calculo.discountINSS,
      baseIRPF: calculo.baseIRPF,
      discountIRPF: calculo.discountIRPF,
      netSalary: calculo.netSalary,
    });
  };

  render() {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = this.state;

    return (
      <div>
        <h1>Cálculo Salário</h1>
        <div className="padding default-flex-row">
          <input type="number" name="salario" onKeyUp={this.handleChange} />
        </div>
        <div className="padding default-flex-row">
          baseINSS:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(baseINSS)}
        </div>
        <div className="padding default-flex-row">
          discountINSS:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(discountINSS)}
        </div>
        <div className="padding default-flex-row">
          baseIRPF:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(baseIRPF)}
        </div>
        <div className="padding default-flex-row">
          discountIRPF:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(discountIRPF)}
        </div>
        <div className="padding default-flex-row">
          netSalary:{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(netSalary)}
        </div>
      </div>
    );
  }
}
