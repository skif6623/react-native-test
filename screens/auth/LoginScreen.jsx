import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';

const initialLoginData = {
  email: '',
  password: '',
};

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(initialLoginData);
  const [isShowKey, setIsShowKey] = useState(false);

  const keyHide = () => {
    setIsShowKey(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    setIsShowKey(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialLoginData);
  };

  return (
    <TouchableWithoutFeedback onPress={keyHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require('../../assets/images/main-bg.jpg')}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
            <View style={styles.formBg}>
              <View
                style={{ ...styles.form, marginBottom: isShowKey ? -60 : 100 }}
              >
                <Text style={styles.formTitle}>Вхід</Text>
                <View style={{ marginBottom: 16 }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Адреса електронної пошти"
                    value={state.email}
                    onFocus={() => setIsShowKey(true)}
                    onChangeText={value =>
                      setState(prevState => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View>
                  <TextInput
                    style={styles.input}
                    placeholder="Пароль"
                    secureTextEntry={true}
                    value={state.password}
                    onFocus={() => setIsShowKey(true)}
                    onChangeText={value =>
                      setState(prevState => ({ ...prevState, password: value }))
                    }
                  />
                </View>
                <TouchableOpacity
                  style={styles.button}
                  activeOpacity={0.9}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonTitle}>Увійти</Text>
                </TouchableOpacity>
                <Button
                  title="Go to register"
                  onPress={() => navigation.navigate('Registration')}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  formBg: {
    paddingTop: 32,
    backgroundColor: '#fff',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  form: {
    marginHorizontal: 16,
  },
  formTitle: {
    marginBottom: 33,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: '#212121',
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    fontFamily: 'Roboto-Regular',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  button: {
    height: 50,
    marginTop: 45,
    justifyContent: 'center',
    backgroundColor: '#FF6C00',
    borderRadius: 100,
  },
  buttonTitle: {
    fontFamily: 'Roboto-Regular',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#fff',
  },
});

export default LoginScreen;
