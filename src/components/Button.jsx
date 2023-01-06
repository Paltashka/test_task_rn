import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import styled from 'styled-components'

const Button = ({
    text,
    onPress,
    style,
}) => {
    const containerStyles = StyleSheet.create({
        main: {
            backgroundColor: '#DD1D21',
            borderRadius: 50,
            paddingVertical: 10,
            paddingHorizontal: 30, 
        }
    });

    return (
        <TouchableOpacity onPress={onPress} style={{
            ...containerStyles.main,
            ...style
        }}>
            <Content>
                {text}
            </Content>
        </TouchableOpacity>
    )
}

const Container = styled.TouchableOpacity`
    background-color: #DD1D21;
    border-radius: 50px;
`

const Content = styled.Text`
    font-family: Poppins-SemiBold;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
`

export default Button;