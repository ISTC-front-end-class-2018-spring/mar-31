import React, { Component } from 'react';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const AppDiv = styled.div`
  background-color: black;
`

let primary = true;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppDiv>
          <Title>Barev</Title>
          {/* <h1 style={{fontSize: '1.5em', textAlign: 'center', color: 'palevioletred'}}>Barev</h1> */}
          <Button primary={true}>Button</Button>
          <Button primary={false}>Button</Button>
          {/* <button 
            style={{
              background: primary ? 'palevioletred' : 'white',
              color: primary ? 'white' : 'palevioletred',
              fontSize: '1em',
              margin: '1em',
              padding: '0.25em 1em',
              border: '2px solid palevioletred',
              borderRadius: '3px'
            }}
          >Button</button> */}
          <RaisedButton label="Secondary" secondary={true} />
        </AppDiv>
      </MuiThemeProvider>
    );
  }
}

export default App;
