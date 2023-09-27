import React from 'react';
import { Dimensions, FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Card, Chip, IconButton, Modal, PaperProvider, Portal, Text, TextInput } from 'react-native-paper';
import TextTicker from 'react-native-text-ticker';
import BackTopbar from '~components/BackTopBar';

const EditProfile: React.FC = () => {
    const [text, setText] = React.useState("원래닉네임");
    const [visible, setVisible] = React.useState(false);
    const [modalNum, setModalNum] = React.useState(0);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    const favoriteGenre = [
        {
            genre: "acuostic",
        },
        {
            genre: "death metal",
        },
        {
            genre: "hard rock",
        },
        {
            genre: "k-pop",
        },
        {
            genre: "j-pop",
        },
    ];

    // eslint-disable-next-line react/no-unstable-nested-components
    const ModalComponent = () => {
        if (modalNum === 1) {
            return (
                <Text>닉네임 변경창</Text>
            );
        } else if (modalNum === 2) {
            return (
                <Text>프로필 이미지 변경창</Text>
            );
        } else if (modalNum === 3) {
            return (
                <Text>프로필 뮤직 변경창</Text>
            );
        } else if (modalNum === 4) {
            return (
                <Text>선호 장르 변경창</Text>
            );
        }
    };

    return (
        <PaperProvider>
            <View style={styles.mainBg}>
                <BackTopbar title={"프로필 수정"} />
                <View style={styles.profile}>
                    <TouchableOpacity onPress={() => {
                        setModalNum(2);
                        showModal();
                    }}>
                        <Avatar.Image size={150} source={require('src/static/images/profileimage.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        setModalNum(1);
                        showModal();
                    }}>
                        <TextInput
                            value={text}
                            editable={false}
                            activeUnderlineColor="#FCD34D"
                            onChangeText={text => setText(text)}
                            mode="flat"
                            style={styles.textInput}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.profileMusic} onPress={() => {
                        setModalNum(3);
                        showModal();
                    }}>
                        <Card.Cover
                        source={require('src/static/images/cover.png')}
                        style={styles.cardCover}
                        />

                        <View style={styles.textBox}>
                        <TextTicker
                            duration={5000}
                            loop
                            // bounce
                            repeatSpacer={50}
                            marqueeDelay={400}
                        >
                            <Text variant="bodyLarge">최대한 길게 작성해보겠습니다 어떻게 될까요 ?</Text>
                        </TextTicker>
                        <Text variant="bodyMedium">우효</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.genreBox}>
                        <Text variant="titleLarge" style={styles.genre}>나의 선호 장르</Text>
                        <IconButton icon={"pencil-outline"} onPress={() => {
                            setModalNum(4);
                            showModal();
                        }}
                        />
                    </View>
                    
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        style={styles.chipBox}
                        data={favoriteGenre}
                        renderItem={({item}) => (
                        <View style={styles.chipContainer}>
                            <Chip style={styles.chip} textStyle={{color: "white"}}>{item.genre}</Chip>
                        </View>
                        )}
                    />
                </View>
                <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <ModalComponent />
                </Modal>
                </Portal>
            </View>
        </PaperProvider>
    );
};

export default EditProfile;

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    mainBg: {
        flex: 1,
        backgroundColor: "white",
    },
    icon: {
        alignSelf: "center",
    },
    profile: {
        alignItems: "center",
        marginVertical: 40,
    },
    textInput: {
        backgroundColor: "white",
        width: "auto",
        height: 30,
        textAlign:"center",
        marginVertical: 40,
    },
    profileMusic: {
        overflow: "hidden",
        width: width * 0.7,
        alignSelf: "center",
        flexDirection: "row",
    },
    cardCover: {
        width: 50,
        height: 50,
    },
    textBox: {
        marginLeft: 10,
        marginRight: 15,
        alignSelf: "center",
    },
    chipContainer: {
        margin: 5,
    },
    chip: {
        alignContent: "space-between",
        backgroundColor: "#FCD34D",
        alignSelf: "center",
    },
    genreBox: {
        alignItems: "center",
        flexDirection: "row",
    },
    genre: {
        marginHorizontal: 10,
        marginVertical: 10,
    },
});