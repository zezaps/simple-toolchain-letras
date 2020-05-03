import React from 'react';
import loading from './loading.gif';

export default () => {
    return (
        <div>
            <img
                src={loading}
                alt="Cargando..."
                style= {{ width: '200px', margin: ' 100px auto', display: 'block'}}
            />
        </div>
    );
};
