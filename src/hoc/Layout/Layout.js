import React, { Component, Fragment } from 'react';
import Navbar from '../../components/Navbar';

class Layout extends Component {
    state = {};

    render() {
        return (            
                <Fragment>
                    <Navbar />
                    <main className="Content">
                        {this.props.children}
                    </main>
                </Fragment>            
        )
    }
}

export default Layout;