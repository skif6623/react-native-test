import React, {useState, useCallback} from "react";
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
} from "react-native";
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const initialRegisterData = {
	login: "",
	email: "",
	password: "",
};

const RegistrationScreen = () => {
	const [state, setState] = useState(initialRegisterData);
	const [isShowKey, setIsShowKey] = useState(false);
	const [fontsLoaded] = useFonts({
		"Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
		"Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
	});
	console.log(isShowKey);
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

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
				<ImageBackground style={styles.image} source={require("../../assets/images/main-bg.jpg")}>
					<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
						<View style={styles.formBg}>
							<View style={{...styles.form, marginBottom: isShowKey === true ? 150 : 113}}>
								<Text style={styles.formTitle}>Реєстрація</Text>
								<View style={{marginBottom: 16}}>
									<TextInput
										style={styles.input}
										placeholder="Логін"
										value={state.email}
										onFocus={() => setIsShowKey(true)}
										onChangeText={value => setState(prevState => ({...prevState, login: value}))}
									/>
								</View>
								<View style={{marginBottom: 16}}>
									<TextInput
										style={styles.input}
										placeholder="Адреса електронної пошти"
										value={state.email}
										onFocus={() => setIsShowKey(true)}
										onChangeText={value => setState(prevState => ({...prevState, email: value}))}
									/>
								</View>
								<View>
									<TextInput
										style={styles.input}
										placeholder="Пароль"
										secureTextEntry={true}
										value={state.password}
										onFocus={() => setIsShowKey(true)}
										onChangeText={value => setState(prevState => ({...prevState, password: value}))}
									/>
								</View>
								<TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={handleSubmit}>
									<Text style={styles.buttonTitle}>Увійти</Text>
								</TouchableOpacity>
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
		backgroundColor: "#fff",
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "flex-end",
	},
	formBg: {
		paddingTop: 32,
		backgroundColor: "#fff",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
	},
	form: {
		marginHorizontal: 16,
	},
	formTitle: {
		marginBottom: 33,
		textAlign: "center",
		fontFamily: "Roboto-Medium",
		fontSize: 30,
		lineHeight: 35,
		letterSpacing: 0.01,
		color: "#212121",
	},
	input: {
		height: 50,
		paddingHorizontal: 15,
		fontFamily: "Roboto-Regular",
		backgroundColor: "#F6F6F6",
		borderWidth: 1,
		borderColor: "#E8E8E8",
		borderRadius: 8,
	},
	button: {
		height: 50,
		marginTop: 45,
		justifyContent: "center",
		backgroundColor: "#FF6C00",
		borderRadius: 100,
	},
	buttonTitle: {
		fontFamily: "Roboto-Regular",
		fontStyle: "normal",
		fontSize: 16,
		lineHeight: 19,
		textAlign: "center",
		color: "#fff",
	},
});

export default RegistrationScreen;
