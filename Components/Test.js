import { ..., Platform } from 'react-native'
import HelloWorld from './HelloWorld'

render() {
    return (
      <View style={styles.main_container}>
        <HelloWorld/>
      </View>
    )
}


subview_container: {
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
        height: 100,
        width: 50
      },
      android: {
        backgroundColor: 'blue',
        height: 50,
        width: 100
      }
    })
}

// Soit on teste la valeur de l'OS

subview_container: {
    backgroundColor: Platform.OS === 'ios' ? 'red' : 'blue',
    height: Platform.OS === 'ios' ? 100 : 50,
    width: Platform.OS === 'ios' ? 50 : 100
}
