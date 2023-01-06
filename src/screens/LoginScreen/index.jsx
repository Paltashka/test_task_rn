import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import ApiClient from "../../api";
import styled from "styled-components/native";

const LoginScreen = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const navigation = useNavigation();

    const onSubmit = async () => {
        try {
        const res = await ApiClient.login(email, password);
        if (res.status === 200) {
            await AsyncStorage.setItem('token', res.data.token);
            const isDisclaimerAccepted = await AsyncStorage.getItem('disclaimer');
            if (!isDisclaimerAccepted) {
                navigation.navigate('Disclaimer');
            } else {
                navigation.navigate('SelectStation');
            }
        } 
        } catch (err) {
            setError("Incorrect")
        }
    }

    return (
        <Screen>
            <Content>
                <Image source={require('../../assets/images/logo.png')} />
                <Title>
                    Login
                </Title>
                <Input placeholder="Email" value={email} onChangeText={(value) => setEmail(value)} autoCapitalize="none"  />
                <Input placeholder="Password" secureTextEntry={true} value={password} onChangeText={(value) => setPassword(value)} autoCapitalize="none" />
                <Button
                    text={
                        <BtnContent>
                            <BtnTitle>Login</BtnTitle>
                            <Image source={require('../../assets/images/Errow.png')} />
                        </BtnContent>
                    } 
                    onPress={onSubmit}
                    style={{marginTop: 30}}
                />
                {error && 
                    <Error>
                        {error}
                    </Error>
                }
            </Content>
            <Footer 
                source={require('../../assets/images/bgimage.png')} 
                imageStyle={{opacity: 0.5}}
            />
        </Screen>
    )
}

const Content = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Footer = styled.ImageBackground`
    height: 300px;
    
`

const BtnContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const BtnTitle = styled.Text`
    font-family: Poppins-SemiBold;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    margin-right: 5px;
`

const Error = styled.Text`
    font-family: Poppins-Regular;
    font-size: 14px;
    line-height: 20px;
    color: #DD1D21;
`

const Input = styled.TextInput`
    borderBottomWidth: 1px;
    borderBottomColor: #F0F4F5;
    width: 50%;
    height: 30px;
    margin: 5px 0;
    font-family: Poppins-Bold;
    font-size: 16px;
    line-height: 24px;
`

const Title = styled.Text`
    font-family: Poppins-Bold;
    font-size: 21px;
    line-height: 31.5px;
    margin: 30px 0;
`

export default LoginScreen;