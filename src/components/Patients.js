
import React, { Component } from 'react'
import Patient from './Patient'



class Patients extends Component {
    constructor(props){
        super(props)
        this.state = {
            pacientes: [
                {
                    nombre: "Xavi",
                    edad: 24,
                    correo: "xavi@xavi.com",
                    direccion: "san piter",
                    sintomas: "llego pedo"
                },
                {
                    nombre: "nat",
                    edad: 21,
                    correo: "nat@nat.com",
                    direccion: "san cabo",
                    sintomas: "dolor de cabeza"
                },
                {
                    nombre: "Cera",
                    edad: 14,
                    correo: "cer@ita.com",
                    direccion: "san tato",
                    sintomas: "dolor garganta"
                }

            ]
        }
    }
    render() {
        return(
            <div>
                <h1>Lista de pacientes febrero 2019</h1>
                {this.state.pacientes.map( (paciente, index)=>(
                    <div>
                        <h3>Nombre: {paciente.nombre}</h3>
                        <p>Edad: {paciente.edad}</p>
                        <p>Sintomas: {paciente.sintomas}</p>
                        <Patient paciente={paciente} />
                        <p>---------------------------------------</p>
                    </div>
                ))}
            </div>
        )
    }
}



export default Patients 