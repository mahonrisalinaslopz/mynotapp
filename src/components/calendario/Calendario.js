import React, { Component } from "react";
import "./styles.css";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

class Calendario extends Component {
  state = {
    fecha: new Date("2023", "01", "02"),
  };

  onChange = (fecha) => {
    this.setState({ fecha: fecha });
  };

  mostrarFecha = (fecha) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    alert(fecha.toLocaleDateString("es-ES", options));
  };

  render() {
    return (
      <>
        <div className="contenedor">
          <div className="center">
            <h1>Calendario</h1>
            <br />
            <h3>Selecciona una fecha:</h3>
            <br />
            <br />
            <DatePicker
              selected={this.state.fecha}
              onChange={this.onChange}
              locale="es"
              className="pickers"
              dateFormat="dd 'de' MMMM 'de' yyyy"
            />
            <br />
            <br />
            <input
              type="button"
              value="Mostrar Fecha"
              className="btn btn-primary"
              onClick={() => this.mostrarFecha(this.state.fecha)}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Calendario;
