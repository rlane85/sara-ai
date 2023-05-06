import React, {Component} from 'react';
import './splash-screen.css';
import logo from './sara-ai02.gif'; 

function LoadingMessage(timeout) {
  return (
    <div className="splash-screen">
      <img src={logo} alt="splash" className="splash-logo" />
      <div className="loading-dot">.</div>
    </div>
  );
}

function withSplashScreen(WrappedComponent, timeout) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
        
        setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, timeout)
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      // while checking user session, show "loading" message
      if (this.state.loading) return LoadingMessage(timeout);

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withSplashScreen;