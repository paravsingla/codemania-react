componentDidMount(){

    const search_text = this.props.navigation.getParam("search_text", "");

    let api_url = "https://googleapis.com/books/v1/volumes/?q="
    let search_url = api_url+search-term
    try {
      let response = await fetch(
        search_url
      );
      let responseJson = await response.json();
      let books = responseJson.items
      let data = []
      for(let i=0;i<20;i++){
        let book = {}
        book.title = books[i].volumeInfo.title
        book.author = books[i].volumeInfo.authors[0]
        book.thumbnail = books[i].imageLinks.thumbnail
        data.push(book)
      }
      this.state = {
        isLoading: false,
        data: data
      }

    } catch (error) {
      console.error(error);
    }

  }
