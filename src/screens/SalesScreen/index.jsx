import React, { useEffect } from "react";
import Screen from "../../components/Screen";
import styled from "styled-components/native";
import { Text, Image } from "react-native";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { increment, setTimer, start } from "../../state/timer/timerSlice";

const bgimage = require("../../assets/images/bgimage.png");

const SalesScreen = ({ route }) => {
    const navigation = useNavigation();
    const { id } = route.params;
    const values = useSelector((state) => state.timer.values);
    const dispatch = useDispatch()

    useEffect(() => {
        if (values[id] && !values[id].timerId && !values[id].started) {
            dispatch(start({id}));
            const timerId = setInterval(() => dispatch(increment({id})), 1000)
            dispatch(setTimer({id, timerId}))
        }
    }, [])

    const stopTimer = () => {
        clearInterval(values[id].timerId);
        dispatch(setTimer({id, timerId: null}))
    }

    const startTimer = () => {
        const timerId = setInterval(() => dispatch(increment({id})), 1000)
        dispatch(setTimer({id, timerId: timerId}))
    }

    return (
        <Screen>
            <Header source={bgimage} imageStyle={{opacity: 0.5}}>
                <TitleWrapper>
                    <BackBtn onPress={() => navigation.goBack()}>
                        <Image source={require('../../assets/images/back.png')} />
                    </BackBtn>
                    <ScreenTitle>
                        Details
                    </ScreenTitle>
                </TitleWrapper>
            </Header>
            <Container>
                <Title>
                    Station Subscribed
                </Title>
                <Content>
                    <LeftSide>
                        <CardTitle>
                            Active From
                        </CardTitle>
                        <Timer>
                            <Num>{values[id].value}</Num>
                            <TimerDescription>seconds</TimerDescription>
                        </Timer>
                        <CardDescription>
                            <Text>MORE INFO</Text>
                        </CardDescription>
                    </LeftSide>
                    <RightSide>
                        <Button 
                            text={values[id].timerId ? 'Stop' : 'Start'} 
                            onPress={values[id].timerId ? stopTimer : startTimer} 
                            style={{paddingVertical: 5, paddingHorizontal: 40}} 
                        />
                    </RightSide>
                </Content>
            </Container>
        </Screen>
    )
}

const Header = styled.ImageBackground`
    height: 220px;
    width: 100%;
    align-items: center;
    padding-top: 90px;
`

const Container = styled.View`
    margin-top: -40px;
    border-radius: 30px ;
    background-color: #fff;
    flex: 1;
    padding: 30px 20px
`

const Content = styled.View`
    width: 100%;
    background-color: #fff;
    border-radius: 16px;
    margin-top: 16px;
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.24);
    flex-direction: row;
    padding: 15px 30px;
`

const LeftSide = styled.View`
    width: 50%;
    height: 100%;
`

const RightSide = styled.View`
    width: 50%;
    align-items: flex-end;
    justify-content: center;
`

const Timer = styled.View`
    flex-direction: row;
    font-family: Poppins-SemiBold;
`

const TimerDescription = styled.Text`
    font-family: Poppins-SemiBold;
    font-size: 11px;
    line-height: 30px;
`

const CardDescription = styled.Text`
    font-family: Poppins-SemiBold;
    font-size: 10px;
    line-height: 15px;
    letter-sp: 4%;
`

const Num = styled.Text`
    font-family: Poppins-Bold;
    font-size: 36px;
    line-height: 54px;
    letter-sp: 4%;
    margin-right: 10px;
`

const Title = styled.Text`
    font-family: Poppins-Bold;
    font-size: 21px;
    line-height: 31.5px;
`

const TitleWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 0 20px;
`

const ScreenTitle = styled.Text`
    font-family: Poppins-Bold;
    font-size: 21px;
    line-height: 31.5px;
    margin: auto;
`

const CardTitle = styled.Text`
    font-family: Poppins-SemiBold;
    font-size: 16px;
    line-height: 24px;
`

const BackBtn = styled.TouchableOpacity`
`

export default SalesScreen;