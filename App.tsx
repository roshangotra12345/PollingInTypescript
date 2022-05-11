import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import DropShadow from 'react-native-drop-shadow';
////import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <ScrollView>
      <LinearGradient
        colors={['#FF4782', '#FE5D75', '#FE7966']}
        style={styles.linearGradient}>
        <StatusBar backgroundColor="#FF4782" />
        <Text style={styles.buttonText2}>Welcome To,</Text>
        <Text style={styles.buttonText1}>Our Polling App</Text>
        <View>
          <View style={styles.foot}>
            <TouchableOpacity>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.sign}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.main}>
          <View style={styles.CircleShape}>
            <Text style={styles.headerText}> Login </Text>
            <DropShadow style={styles.shadowProp}>
              <View style={styles.button}>
                <TextInput
                  placeholder="Enter Your Email"
                  style={(styles.text, styles.buttonTextt)}
                />
              </View>
            </DropShadow>
            <DropShadow style={styles.shadowProp}>
              <View style={styles.button}>
                <TextInput
                  placeholder="Password"
                  style={(styles.text, styles.buttonTextt)}
                />
              </View>
            </DropShadow>

            <Text></Text>
            <TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}>Login Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.text4}>Already have an account Signup?</Text>
          <Text style={styles.text5}>Also login with</Text>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },

  buttonText: {
    fontSize: 10,
    fontFamily: 'Gill Sans',
    marginTop: 20,
    margin: 5,
    color: '#ffffff',
    padding: 20,
  },
  buttonText1: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'bold',
    borderRadius: 100,
    color: 'yellow',
    backgroundColor: 'transparent',
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginRight: '25%',
    paddingTop: 10,
  },
  CircleShape: {
    width: 430,
    alignItems: 'center',
    justifyContent: 'center',
    height: 430,
    borderRadius: 420 / 2,
    backgroundColor: '#fff',
  },
  main: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 160,
  },
  TextInput: {
    borderWidth: 2,
    margin: 15,
    width: 200,
    height: 100,
    elevation: 3,
    marginLeft: '10%',
    padding: 50,

    // shadowColor: 'Red',
    shadowOffset: {width: 10, height: 5},
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'yellow',
    color: 'Black',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginRight: '18%',
  },
  appButtonText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    // fontWeight: 'bold',
    // fontStyle: 'bold',
    // fontFamily: 'bold',
    alignSelf: 'center',
  },
  bottom: {
    marginBottom: '20%',
  },
  foot: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    margin: 5,
    marginBottom: 40,
  },
  login: {
    marginRight: 30,
    fontSize: 20,
    marginTop: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'bold',
  },
  sign: {
    fontSize: 20,
    marginTop: 15,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'bold',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.4,
    shadowRadius: 5,
    width: 300,
    marginLeft: '25%',
    color: 'black',
  },
  button: {
    backgroundColor: 'white',
    color: 'black',
    height: 60,
    padding: 5,
    borderRadius: 24,
    marginTop: 20,
    fontSize: 15,
  },
  buttonTextt: {
    color: 'black',
    fontSize: 18,
  },
  text: {
    fontSize: 15,
    padding: 15,
    fontWeight: 'bold',
  },
  buttonText2: {
    fontSize: 33,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'bold',
    backgroundColor: 'transparent',
    marginTop: 5,
  },
  text4: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  text5: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
