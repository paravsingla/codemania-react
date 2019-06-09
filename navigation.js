import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

class ToReadScreen extends React.Component {
  static navigationOptions = {
    title: 'To Read',
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Search"
          onPress={() => this.props.navigation.navigate('Search')}
        />
        <Button
          title="Go to Results"
          onPress={() => this.props.navigation.navigate('Results')}
        />
      </View>
    );
  }
}


class ReadingScreen extends React.Component {
  static navigationOptions = {
    title: 'Reading',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ReadingScreen!</Text>
      </View>
    );
  }
}

class DoneScreen extends React.Component {
  static navigationOptions = {
    title: 'Done',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>DoneScreen!</Text>
      </View>
    );
  }
}

class SearchScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  static navigationOptions = {
    title: 'Search',
  };
  render() {
    return (
      <View style={{flexDirection:'row'}}>
        <TextInput
        style={{flex:0.8, height: 40, borderColor: 'gray',
        borderWidth: 1, margin: 5,}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <Button style={{flex:0.2, height: 40, paddingLeft:5,}}
          title="Search"
          onPress={() => this.props.navigation.navigate('Results',
          {search_text: this.state.text})}
        />
      </View>
    );
  }
}

class ResultsScreen extends React.Component {
  static navigationOptions = {
    title: 'Results',
  };
  render() {

    const search_text = this.props.navigation.getParam("search_text", "");

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Results</Text>
        <Text>{search_text}</Text>
      </View>
    );
  }
}

const ToReadStack = createStackNavigator({
  ToRead: { screen: ToReadScreen },
  Search: { screen: SearchScreen },
  Results: { screen: ResultsScreen },
});

const ReadingStack = createStackNavigator({
  Reading: { screen: ReadingScreen },
});

const DoneStack = createStackNavigator({
  Done: { screen: DoneScreen },
});

export default createAppContainer(createBottomTabNavigator(
  {
    ToRead: { screen: ToReadStack },
    Reading: { screen: ReadingStack },
    Done: { screen: DoneStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'ToRead') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Reading') {
          iconName = `ios-options`;
        } else if (routeName === 'Done') {
          iconName = `ios-albums`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));
