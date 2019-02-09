import React from 'react'
//cree una función
const Home = () => {
    return(
        <div className="component-container">
            <h3>
                Bienvenido
            </h3>
            <img className="component-img" src="https://static2.ideal.es/www/multimedia/201805/25/media/cortadas/facua-farmacia-kmhC-U502019942276koD-624x385@Ideal.jpg" alt="no cargo la img"/>
        </div>
    )
}

// aquí exporto mi home para qu eotros componentes puedan usarlo
export default Home