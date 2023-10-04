import React, {useState} from "react";
import { ScrollView, View, StyleSheet, FlatList } from "react-native";
import { Text, Appbar, Divider, Card, IconButton } from "react-native-paper";
import Icon from 'react-native-vector-icons/FontAwesome';


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
                <Appbar.Content title={title} style={topbarStyle.title}/>
            </Appbar.Header>
            <Divider />
        </>
    );
};

const ListBox = ({category}) => {
    const data = [
        { title: '플리제목1' , total: 10, heart: 151 },
        { title: '플리제목2' , total: 10, heart: 151 },
        { title: '플리제목3' , total: 10, heart: 151 },
        { title: '플리제목4' , total: 10, heart: 151 },
        { title: '플리제목5' , total: 10, heart: 151 },
        { title: '플리제목6' , total: 10, heart: 151 },

    ];

    const ListBoxStyle = StyleSheet.create({
        listBox: {
            flex: 1,
            margin: 10,
        },
        box: {
            flex:1 ,
            flexDirection: "row",
            alignItems: "center",
            margin: 10,
        },
        category: {
            fontWeight: "bold",
            margin: 15,
        },
        cover: {
            width: 60,
            height: 60,
        },
        listText: {
            marginTop: 5,
            marginLeft: 10,
        },
        likeBtn : {
            marginLeft: "auto",
        },
    });

    const [like, setLike] = useState(true);

    return (
        <View style={ListBoxStyle.listBox}>
            <Text variant="titleMedium"
                style={ListBoxStyle.category}>
                    {category}
            </Text>
            <FlatList
                data={data}
                renderItem={({item}) => (
                <View style={ListBoxStyle.box}>
                    <Card.Cover
                        source={{ uri: 'https://picsum.photos/700' }}
                        style={ListBoxStyle.cover} />
                    <View>
                        <Text variant="titleMedium" style={ListBoxStyle.listText}>{item.title}</Text>
                        <Text variant="titleSmall" style={ListBoxStyle.listText}>
                            총 {item.total}곡 | {<Icon name="heart" size={15} color="#FCD34D" />}{item.heart}개
                        </Text>
                    </View>
                    <View style={ListBoxStyle.likeBtn}>
                        {like ? // 좋아요 여부에 따라 하트색 변경 -> 나의 플레이스트라면 좋아요 해제 하는 순간 화면에서 사라지게 하면 될듯
                            <IconButton
                            icon="cards-heart"
                            iconColor="#FCD34D"
                            size={30}
                            onPress={() => {
                                setLike(false); // TODO : 개별적으로 만들어서 연결
                            }}
                            /> :
                            <IconButton
                            icon="cards-heart-outline"
                            iconColor="#FCD34D"
                            size={30}
                            onPress={() => {
                                setLike(true);
                            }}
                        />
                        }
                    </View>
                </View>
            )}/>
        </View>
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
            <ListBox category={"{NickName}님의 플레이리스트"}/>
            <Divider />
            <ListBox category={"{NickName}님이 좋아요 한 플레이리스트"} />
        </ScrollView>
    );
};

export default Playlist;