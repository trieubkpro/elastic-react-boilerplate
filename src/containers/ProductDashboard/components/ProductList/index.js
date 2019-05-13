import React, { Fragment } from 'react';

export default ({ show2Products }) => {
    return (
        <Fragment>
                <h4>Product List</h4>
                
                <div>{show2Products && 'chi show 2 san pham'}</div>                
        </Fragment>
    )
}