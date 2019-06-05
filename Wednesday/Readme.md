### Wednesday, 5th June

We discussed some of the react components available.

1. Create a View

   `<View style={{ width : 200, height : 100, backgroundColor : "#ff0000" }} />`

2. Create nested Views

   `<View style={{ flexDirection : "row", height : 100, padding: 20 }}> `

   ​	`<View style={{ backgroundColor : "#ff0000", flex : 0.5}} /> `

   ​	`<View style={{ backgroundColor : "#00ff00", flex : 0.5}} /> `

   `</View>`

3. Text Component:

   `<Text style={{ color : "red" }}>Hello, I am a Text component</Text>`

4. Nested Text Components:

   `<Text style={{ color : "red" }}> `

   ​	`<Text>I am red</Text> `	

   ​	`<Text style={{ color : "green" }}> I am green</Text> `

   `</Text>`

5. Multiple Text Components:

   `<Text> `

   `<Text>I am the very model </Text> `

   `<Text>of the modern major general</Text> `

   `</Text>`

6. Image:

   `<Image source={ require("./assets/image.png") } />`

7. Image from url:

   `<Image source={ uri : "https://paravsingla.com/logo.png" } />`

8. Text input component:

   `<TextInput value={ this.state.textInputValue }
    style={{ width : "50%", height : 40, borderColor : "green", borderWidth : 2 }}
    onChangeText={ (inText) => this.setState({inText}) }
   />`

9. Button

   `<Button title="Go ahead, press me, I dare ya!" onPress={ () => console.log("You pressed me!"); } />`

10. Touchable Highlight:

    `<TouchableHighlight onPress={() => { console.log("Pressed!"); }} >
     <Text>Tap me!</Text>
    </TouchableHighlight>`

11. You need to import every component before using it:

    `import { StyleSheet, Text, View, TextInput, Button, <any other components>} from 'react-native';`

