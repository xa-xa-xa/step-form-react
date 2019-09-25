import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    /*
     * PROCESS FORM
     */
    this.props.nextStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Confirm Submission' />
          <List>
            <ListItem primaryText='First Name' secondaryText={firstName} />
            <ListItem primaryText='First Last' secondaryText={lastName} />
            <ListItem primaryText='email' secondaryText={email} />
            <ListItem primaryText='Occupation' secondaryText={occupation} />
            <ListItem primaryText='City' secondaryText={city} />
            <ListItem primaryText='Bio' secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label='back'
            primary='false'
            style={styles.button}
            onClick={this.back}
          />
          <RaisedButton
            label='continue'
            primary='true'
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
