import React, { Component } from 'react';
import './Vidget.css';

class Vidget extends Component {
  state = {
    visible: false,
  };
  show = () => {
    this.setState({ visible: true });
  };
  hide = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div className="Vidget">
        <button type="button" className="Vidget__togle" onClick={this.show}>
          Показать
        </button>
        <button type="button" className="Vidget__togle" onClick={this.hide}>
          Скрыть
        </button>

        {this.state.visible && (
          <div className="Vidget__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Vidget;
