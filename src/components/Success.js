import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    /*
     * PROCESS FORM
     */
    this.props.nextStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <AppBar title="Success" />
          <h1>Thank you for your submission.</h1>
          <p>
            You will receive email with confirmation of your successful
            submission soon.
          </p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;
