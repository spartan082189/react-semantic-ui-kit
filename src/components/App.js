import React, { PropTypes } from 'react';
import { Header, Footer } from '../components';

class App extends React.Component {
  render() {
    return (  
        <section>
          <Header /> 
          {this.props.children}
          <Footer />   
        </section>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
