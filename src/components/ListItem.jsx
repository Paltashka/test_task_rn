import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components'

const ListItem = ({ data, onPress }) => {
    return (
        <Container onPress={onPress}>
            <Image source={require('../assets/images/itemIcon.png')} style={{marginRight: 15}} />
            <Content>
                <Num>{data.pantone_value}</Num>
                <Name>{data.name}</Name>
            </Content>
        </Container>
    )
}

const Container = styled.TouchableOpacity`
    padding: 15px 0;
    flex-direction: row;
`

const Num = styled.Text`
    font-family: Poppins-SemiBold;
    font-size: 18px;
    line-height: 27px;
`

const Name = styled.Text`
    font-family: Poppins-SemiBold;
    color: #ADB7C6;
    font-size: 14px;
    line-height: 21px;
`

const Content = styled.View``

export default ListItem;