import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {
	StyleSheet,
	View,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Alert,
	Button,
	Text,
	ImageBackground,
	TouchableOpacity,
} from "react-native";

const initialRegisterData = {
	login: "",
	email: "",
	password: "",
};

const App = () => {
	const [isShowKey, setIsShowKey] = useState(false);
	console.log(isShowKey);

	const keyHide = () => {
		setIsShowKey(false);
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback onPress={() => keyHide()}>
			<View style={styles.container}>
				<ImageBackground style={styles.image} source={require("./assets/images/main-bg.jpg")}>
					<KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
						<View style={{...styles.form, marginBottom: isShowKey ? -60 : 100}}>
							<View style={{marginBottom: 16}}>
								<TextInput
									style={styles.input}
									placeholder="Адреса електронної пошти"
									onFocus={() => setIsShowKey(true)}
								/>
							</View>
							<View>
								<TextInput
									style={styles.input}
									placeholder="Пароль"
									secureTextEntry={true}
									onFocus={() => setIsShowKey(true)}
								/>
							</View>
							<TouchableOpacity style={styles.button} activeOpacity={0.9} onPress={() => keyHide()}>
								<Text style={styles.buttonTitle}>Увійти</Text>
							</TouchableOpacity>
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
	form: {
		backgroundColor: "white",
		marginHorizontal: 16,
	},
	input: {
		height: 50,
		paddingHorizontal: 15,
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
		fontStyle: "normal",
		fontSize: 16,
		lineHeight: 19,
		textAlign: "center",
		color: "#fff",
	},
});

export default App;
