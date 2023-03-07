import { StyleSheet, ImageBackground, View, Text } from 'react-native'
import colors from '../config/colors'

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require('../assets/Home-page-bg.jpg')}
      style={styles.img}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>STRIKEWEAR</Text>
        <Text style={styles.subTitle}>Wear What fits you</Text>
      </View>
      <View style={styles.signIn}>
        <Text
          style={{
            color: colors.white,
            fontWeight: 'bold',
            fontSize: 20,
            fontStyle: 'italic',
          }}
        >
          Sign in
        </Text>
      </View>
      <View style={styles.signUp}>
        <Text
          style={{
            fontWeight: '500',
            fontSize: 20,
            fontStyle: 'italic',
            textDecorationLine: 'underline',
          }}
        >
          Sign up
        </Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: 400,
    height: 900,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 100,
  },
  title: {
    fontSize: 40,
    color: colors.primary,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  subTitle: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: '500',
    fontStyle: 'italic',
  },

  signIn: {
    width: '70%',
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  signUp: {
    width: '80%',
    alignItems: 'center',
    marginBottom: 25,
  },
})
