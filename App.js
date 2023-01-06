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
	const [data, setData] = useState(initialRegisterData);
	const handleSubmit = () => {
		console.log(data);
		setData(initialRegisterData);
	};
	return (
		<View style={styles.container}>
			<ImageBackground style={styles.image} source={require("./assets/images/main-bg.jpg")}>
				<View style={styles.formBg}>
					<Text style={styles.title}>Реєстрація</Text>
					<TextInput
						style={styles.input}
						placeholder="Логін"
						value={data.login}
						onChangeText={value => setData(prevData => ({...prevData, login: value}))}
					/>
					<TextInput
						style={styles.input}
						placeholder="Адрес електронної пошти"
						value={data.email}
						onChangeText={value => setData(prevData => ({...prevData, email: value}))}
					/>
					<TextInput
						style={styles.input}
						secureTextEntry={true}
						placeholder="Пароль"
						value={data.password}
						onChangeText={value => setData(prevData => ({...prevData, password: value}))}
					/>
					<TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleSubmit}>
						<Text style={styles.buttonText}>Зареєструватися</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
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
		alignItems: "center",
	},
	formBg: {
		width: "100%",
		height: 549,
		paddingTop: 92,
		paddingHorizontal: 16,
		backgroundColor: "#fff",
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
	},
	title: {
		marginBottom: 32,
		textAlign: "center",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 30,
		lineHeight: 35,
		letterSpacing: 0.01,
		color: "#212121",
	},
	input: {
		height: 50,
		marginBottom: 16,
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
		alignContent: "center",
		backgroundColor: "#FF6C00",
		textAlign: "center",
		borderRadius: 100,
	},
	buttonText: {
		fontStyle: "normal",
		fontSize: 16,
		lineHeight: 19,
		textAlign: "center",
		color: "#fff",
	},
});

export default App;
