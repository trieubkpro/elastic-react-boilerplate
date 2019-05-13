import React, { Component, Fragment } from 'react';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import actions from './actions';
import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';
import settingReducer from './reducer';
import settingSagas from './sagas';
import { Container, Button } from 'react-bootstrap';
import _ from 'lodash';


class Setting extends Component {
    componentDidMount() {        
        const makeAction = (type, ...argNames) => (...args) => {
            let action = { type };
          
            argNames.forEach((arg, index) => action[argNames[index]] = args[index]);
          
            return action;
          };
          
          const makeAsyncActions = (types, actionName) =>
            _.fromPairs(
              [
                ['request', 'payload'],
                ['success', 'data'],
                ['error', 'errors'],
              ].map(
                e => [
                  _.camelCase(`${actionName}_${e[0]}`),
                  makeAction(types[_.toUpper(`${actionName}_${e[0]}`)], e[1])
                ]
              )
            )                    
    }

    handleShow2Products = () => {        
        this.props.actions.setAmountToShow(!this.props.show2Products);
    }

    handleBack = () => {
        this.props.history.push({
            pathname: '/management'            
        });
    }
   
    render() {
        const { show2Products } = this.props;
        
        return (
            <Fragment>
                <Container>                    
                    <h4>Setting Dashboard</h4>
                    <div>1. Only show 2 products: <Button variant="primary" onClick={this.handleShow2Products}>{show2Products ? 'Disable' : 'Enable'}</Button></div>                                        
                </Container>
            </Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {    
    return { actions: bindActionCreators({ ...actions }, dispatch)};
}

const mapStateToProps = (state) => {
    const { settingReducer: { show2Products } } = state;    

    return { show2Products };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: "settingReducer", reducer: settingReducer });
const withSagas = injectSaga({ key: "settingSagas", saga: settingSagas });

export default  compose(withReducer, withSagas, withConnect)(Setting);