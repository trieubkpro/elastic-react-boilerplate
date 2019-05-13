import React from 'react';
import { Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

export default () => {
    return (
            <Container>
                <div className="NavbarWrapper">            
                    <Link to="/" className="ProductManagementItem">Products Management</Link>
                    <Link to="/settings">Settings (Async Load)</Link>        
                </div>
            </Container>
    )
}