import React, { Component } from 'react';
import { Container } from 'react-bootstrap';


// Note:
// catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI
// Also, remember that errors are caught in render but are not caught in event handlers.
class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {      
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      //logErrorToMyService(error, info);
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <Container><h1>Something went wrong.</h1></Container>;
      }
      return <Container>{this.props.children}</Container>;
    }
  }

  export default ErrorBoundary;