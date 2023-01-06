import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Screen from "../../components/Screen";
import Button from "../../components/Button";
import styled from "styled-components/native";

const DisclaimerScreen = () => {
    const navigation = useNavigation();

    const accept = async () => {
        try {
            await AsyncStorage.setItem('disclaimer', 'true');
        } catch (err) {
            console.error(err);
        }
        navigation.navigate('SelectStation');
    }

    return (
        <Screen>
            <Header source={require('../../assets/images/bgimage.png')} imageStyle={{opacity: 0.5}}>
                <Image source={require('../../assets/images/logo.png')} />
            </Header>
            <Container>
                <Title>
                    Disclaimer
                </Title>
                <Content>
                    The information provided by the Zdaly Fuel
                    Network Optimizer app is based on historical data. 
                    Data on Zdaly Light is updated once daily at 8:00 a.m. eastern time. Any prospective information is based on that data and should not be relied on as a estimation of future performance. Any future product prices are the manufacturer's suggested retail price (MSRP) only. Sites are independent operators free to set their retail
                    price.
                </Content>
                <Button text={'I Accept'} onPress={accept} />
            </Container>
        </Screen>
    )
}

const Header = styled.ImageBackground`
    height: 220px;
    width: 100%;
    align-items: center;
    padding-top: 60px;
`

const Container = styled.View`
    flex: 1;
    display: flex;
    align-items: center;
    margin-top: -40px;
    border-radius: 30px;
    background-color: #fff;
    padding: 15px 35px;
`

const Title = styled.Text`
    font-family: Poppins-Bold;
    font-size: 21px;
    line-height: 31.5px;
    margin: 20px 0;
`

const Content = styled.Text`
    font-family: Poppins-Regular;
    font-size: 14px;
    line-height: 30px;
    margin-bottom: 20px;
`

export default DisclaimerScreen;