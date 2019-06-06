`import React from 'react';`
`import { StyleSheet, Switch, TextInput, View, Image, Button, Picker, Slider} from 'react-native';`

`export default class App extends React.Component {`
  `constructor(props) {`
    `super(props);`
    `this.state = {slider: 0};`
  `}`
  `render() {`
    `return (`
      `<View style={styles.container}>`
        `<Switch value={ this.state.loveRN }`
         `onValueChange={ (inValue) => this.setState({ loveRN : inValue }) }`
        `/>`
      `</View>`
    `);`
  `}`
`}`

`const styles = StyleSheet.create({`
  `container: {`
    `flex: 1,`
    `backgroundColor: '#fff',`
    `alignItems: 'center',`
    `justifyContent: 'center',`
  `},`
`});`