import React, { Component } from 'react'
import { Consumer } from '../../context';
import Loading from '../diseño/Loading';


class Canciones extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { track_list } = value;

                    if(track_list === undefined || track_list.length === 0){
                        return <Loading />
                    } else {
                        return <h1>Canciones cargadas</h1>
                    }
                     //console.log(value);
               
                }}
            </Consumer>
        )
    }
}

export default Canciones;