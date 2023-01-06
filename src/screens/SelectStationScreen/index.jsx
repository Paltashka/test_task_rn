import React, { useState, useEffect } from "react";
import Screen from "../../components/Screen";
import ApiClient from "../../api";
import ListItem from "../../components/ListItem";
import setUpTimer from "../../utils/setUpTimer";
import { FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styled from "styled-components/native";

const bgimage = require("../../assets/images/bgimage.png");

const SelectStationScreen = () => {
    const [items, setItems] = useState();
    const navigation = useNavigation();

    const getData = async () => {
        const res = await ApiClient.getList();
        if (res.status === 200) {
            setItems(res.data.data);
            setUpTimer(res.data.data);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <ListItem 
                data={item}
                onPress={() => {
                    navigation.navigate('Sales', {id: item.id})
                }}
            />
        )
    }

    return (
        <Screen>
            <Header source={bgimage} imageStyle={{opacity: 0.5}}>
                <Title>
                    SelectStation
                </Title>
            </Header>
            <Container>
                <SearchBar placeholder="Search by ID, Name, City" />
                <Content>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        ItemSeparatorComponent={Divider}
                    />
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
    border-radius: 30px;
    background-color: #fff;
    flex: 1;
    padding: 30px 20px
`

const Content = styled.View`
`

const SearchBar = styled.TextInput`
    background-color: #F0F4F5;
    border-radius: 10px;
    font-family: Poppins-Medium;
    font-size: 12px;
    color: #ADB7C6;
    padding: 15px 20px;
    margin-bottom: 20px;
`

const Title = styled.Text`
    font-family: Poppins-Bold;
    font-size: 21px;
    line-height: 31.5px;
`

const Divider = styled.View`
  background-color: #F0F4F5;
  width: 100%;
  height: 1px;
`;

export default SelectStationScreen;