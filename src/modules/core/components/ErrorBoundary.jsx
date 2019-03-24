import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  static getDerivedStateFromError(error) {
    this.setState({
      hasError: true,
      error,
    });
  }

  // componentDidCatch(error, info) {
  //   this.setState({
  //     hasError: true,
  //     error,
  //     info,
  //   });
  // }

  render() {
    if (this.state.hasError) {
      console.log(this.state.error, this.state.info);
      return (
        <div>Error was occured</div>
      )
    }

    return this.props.children;
  }
}