

class BookItem extends React.Component {

  render() {

    return (
      <View style={styles.item}>
          <Image
          source={{uri: this.props.thumbnail}}
          resizeMode="stretch" style={styles.thumb}
          />
        <View style={styles.details}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.author}>{this.props.author}</Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },
  thumb: {
    height: 50,
    width: 50,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
  },
  details: {
    margin: 16,
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  author: {
    fontSize: 16,
    color: '#999',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: 'rgba(0, 0, 0, .08)',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
