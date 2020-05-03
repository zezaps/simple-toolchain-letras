import React from 'react';
import loading from './loading.gif';

export default () => {
    return (
        <div>
            <img
                src={loading}
                alt="Cargando..."
                style= {{ width: '350px', margin: ' 40px auto', display: 'block'}}
            />
        </div>
    );
};
