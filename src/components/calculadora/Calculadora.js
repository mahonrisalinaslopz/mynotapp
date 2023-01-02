import Display from './Display';
import PanelDeBotones from './PanelDeBotones';
import { Component } from 'react';
import Operaciones from './logic/Operaciones';
import './styles.css';


class Calculadora extends Component {

  state = {
    total: null,
    siguiente: null,
    operador: null
  }

  handleClick = nombreDeBoton => this.setState(Operaciones(this.state, nombreDeBoton))

  render() {
  return (
    <div className='component-app'>
      <h1>Calculadora</h1>
      <Display value={this.state.siguiente || this.state.total || "0"} />
      <PanelDeBotones clickHandle={this.handleClick} />
    </div>
    );
  }
}

export default Calculadora;