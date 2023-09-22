import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { Text, Appbar, Divider } from "react-native-paper";



const Topbar = ({title}) => {
    const topbarStyle = StyleSheet.create({
        topbar: {
            alignItems: "center",
            textAlign: 'center',
        },
        title: {
            flex: 1,
            alignItems: "center",
            textAlign: 'center',
        },
    });

    return (
        <>
            <Appbar.Header style={topbarStyle.topbar}>
                <Appbar.Content title={title}  style={topbarStyle.title}/>
            </Appbar.Header>
            <Divider />
        </>
    );
};

const ListBox = () => {
    const ListBoxStyle = StyleSheet.create({
        title: {
            fontWeight: "bold",
            margin: 10,
        },
    });

    return (
        <>
            <Text variant="titleLarge" style={ListBoxStyle.title}>"사용자이름"님의 플레이리스트</Text>
        </>
    );
};

const Playlist = () => {
    const mainStyle = StyleSheet.create({
        background: {
            backgroundColor: "white",
        },
    });

    return (
        <ScrollView style={mainStyle.background}>
            <Topbar title={"플레이리스트"}/>
            <ListBox />
        </ScrollView>
    );
};

export default Playlist;