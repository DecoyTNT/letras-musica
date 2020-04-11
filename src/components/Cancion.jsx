import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Cancion = ({ letra }) => {

    if (letra.trim() === '') return null;

    return (
        <Fragment>
            <h2>Letra de la canción</h2>
            <p className="letra">{letra}</p>
        </Fragment>
    );
}

Cancion.propTypes = {
    letra: PropTypes.string.isRequired
}

export default Cancion;