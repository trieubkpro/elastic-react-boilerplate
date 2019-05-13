import React, { Component, Fragment } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';
import { Link } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import { Container, Button } from 'react-bootstrap';
import ErrorBoundary from '../../hoc/ErrorBoundary/ErrorBoundary';

class ProductsDashboard extends Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { show2Products, products } = this.props;
        return (
            <Fragment>
                <Container>                
                    <ErrorBoundary>
                        <ProductList
                        { ...{show2Products, products}} 
                        />                                     
                    </ErrorBoundary>                  
                </Container>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ ...actions }, dispatch);
}

const mapStateToProps = (state) => {    
    const { productsReducer: { products }, settingReducer } = state;
        
    let show2Products = false;
    if (settingReducer) {
       show2Products= settingReducer.show2Products;
    }

    return { products, show2Products };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default  compose(withConnect)(ProductsDashboard);