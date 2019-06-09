class ResultsScreen extends React.Component {

  constructor(props){
    super(props)
    const search_text = this.props.navigation.getParam("search_text", "");
    this.state = {
      isLoading: true,
      search_text: search_text
    }
  }

  static navigationOptions = {
    title: 'Results',
  };

  componentDidMount(){
    let url = "https://www.googleapis.com/books/v1/volumes?q="+ this.state.search_text
      return fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          let raw_data = responseJson.items;
          let books = []
          for(let i=0;i<10;i++){
            books.push(raw_data[i])
          }
          this.setState({
            isLoading: false,
            data: books,
          }, function(){

          });

        })
        .catch((error) =>{
          console.error(error);
        });
    }


  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Results</Text>
        <Text>{this.state.search_text}</Text>
        <FlatList data = {this.state.data} 
        renderItem={({item})=> <BookItem title={item.volumeInfo.title}  />}  />
      </View>
    );
  }
}
