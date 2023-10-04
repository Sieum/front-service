import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Keyboard, KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Button, Card, Chip, Dialog, IconButton, Modal, PaperProvider, Portal, Searchbar, Snackbar, Text, TextInput } from 'react-native-paper';
import TextTicker from 'react-native-text-ticker';
import BackTopbar from '~components/BackTopBar';

const EditProfile: React.FC = () => {
    const [text, setText] = useState("원래닉네임");
    const [visible, setVisible] = useState(false);
    const [modalNum, setModalNum] = useState(0);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 20};

    const [visibleDialog, setVisibleDialog] = React.useState(false);
    const showDialog = () => setVisibleDialog(true);
    const hideDialog = () => setVisibleDialog(false);

    // eslint-disable-next-line react/no-unstable-nested-components
    const DialogComponent = () => {

        const styles = StyleSheet.create({
            dialogText: {
                textAlign: "center",
            },
        });

        return (
            <Portal>
                <Dialog visible={visibleDialog} onDismiss={hideDialog}>
                    <Dialog.Content>
                    <Text variant="headlineMedium" style={styles.dialogText}>수정이 완료되었습니다</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                    <Button onPress={hideDialog} buttonColor="#FCD34D" textColor="white" mode="text">닫기</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        );
    };

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

    const AllGenre = [
        {
            id: 1,
            genre: "acuostic",
            selected: true,
        },
        {
            id: 2,
            genre: "death metal",
            selected: true,
        },
        {
            id: 3,
            genre: "hard rock",
            selected: true,
        },
        {
            id: 4,
            genre: "k-pop",
            selected: true,
        },
        {
            id: 5,
            genre: "j-pop",
            selected: false,
        },
        {
            id: 6,
            genre: "alternative pop",
            selected: false,
        },
        {
            id: 7,
            genre: "anime",
            selected: false,
        },
        {
            id: 8,
            genre: "british",
            selected: false,
        },
        {
            id: 9,
            genre: "bossa nova",
            selected: false,
        },
        {
            id: 10,
            genre: "chill-out",
            selected: false,
        },
        {
            id: 11,
            genre: "christmas",
            selected: false,
        },
        {
            id: 12,
            genre: "classic",
            selected: false,
        },
        {
            id: 13,
            genre: "country",
            selected: false,
        },
        {
            id: 14,
            genre: "dance pop",
            selected: false,
        },
        {
            id: 15,
            genre: "disco",
            selected: false,
        },
        {
            id: 16,
            genre: "doo-wop",
            selected: false,
        },
        {
            id: 17,
            genre: "drama",
            selected: false,
        },
        {
            id: 18,
            genre: "drill and bass",
            selected: false,
        },
        {
            id: 19,
            genre: "dubstep",
            selected: false,
        },
    ];

    // eslint-disable-next-line react/no-unstable-nested-components
    const ModalComponent = () => {
        const [nickname, setNickname] = useState("원래닉네임");
        const [searchQuery, setSearchQuery] = useState("");
        const onChangeSearch = (query : string) => setSearchQuery(query);
        const [chipData, setChipData] = useState(AllGenre);
        const [count, setCount] = useState(0);

        const [snackbarVisible, setSnackBarVisible] = useState(false);
        const onToggleSnackBar = () => setSnackBarVisible(true);
        const onDismissSnackBar = () => setSnackBarVisible(false);

        useEffect(() => {
            console.log(count + "개 선택");
        }, [count]);


        const handleChipClick = (chipId) => {
            const updatedData = [...chipData];

            updatedData.forEach((item) => {
                if (item.id === chipId) {
                    if (item.selected === true) {
                        setCount(count - 1);
                        item.selected = !item.selected;
                        setChipData(updatedData);
                    } else {
                        if (count >= 5) {
                            onToggleSnackBar();
                        } else {
                            setCount(count + 1);
                            item.selected = !item.selected;
                            setChipData(updatedData);
                        }
                    }
                }
            });
        };

        const countUp = () => {
            let selectedCount = 0;
            AllGenre.forEach((item) => {
                if (item.selected === true) {
                    selectedCount += 1;
                }
            });
            setCount(selectedCount);
        };

        const musicData = [
        {
            id: '1',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '2',
            musicTitle: '민들레22222222222',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '3',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '4',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '5',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '6',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '7',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '8',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '9',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '10',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '11',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '12',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        {
            id: '13',
            musicTitle: '민들레',
            artist: '우효',
            image: require('src/static/images/cover.png'),
        },
        ];

        const styles = StyleSheet.create({
            modal: {
                height: Dimensions.get("window").height * 0.7,
            },
            header: {
                // marginVertical: 10,
                marginBottom: 20,
            },
            rowBox: {
                flexDirection: "row",
                alignItems: "center",
            },
            textInput: {
                backgroundColor: "white",
                flex: 1,
            },
            iconBtn: {
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
                backgroundColor: "#FCD34D",
            },
            searchBar: {
                backgroundColor: "white",
                borderWidth: 1,
                borderColor: "#FCD34D",
                marginBottom: 10,
            },
            searchItemBox: {
                flex:1 ,
                flexDirection: "row",
                alignItems: "center",
                margin: 10,
                alignContent: "center",
            },
            searchItemCover: {
                width: 60,
                height: 60,
            },
            searchItemText: {
                marginHorizontal: 10,
            },
            addBtnBox: {
                marginLeft: "auto",
            },
            addBtn: {
                backgroundColor: "#FCD34D",
            },
            emptyText: {
                textAlign: "center",
                marginTop: 30,
            },
            chipContainer: {
                marginVertical: 5,
                marginRight: 5,
            },
            chip: {
                alignContent: "space-between",
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: "#FCD34D",
                alignSelf: "center",
            },
            selectedChip: {
                alignContent: "space-between",
                backgroundColor: "#FCD34D",
                borderWidth: 2,
                borderColor: "#FCD34D",
                alignSelf: "center",
            },
            chipBox: {
                maxHeight: Dimensions.get("window").height * 0.7,
            },
            genreBox: {
                flexDirection: "row",
                alignSelf: "flex-end",
            },
            checkBtn: {
                // backgroundColor: "red",
                // justifyContent: "flex-end",
                // marginLeft: "auto",
                // alignSelf: "flex-start",
            },
            snackbarContainer: {
                flex: 1,
                justifyContent: "space-between",
            },
            snackbar: {
                backgroundColor: "#FCD34D",
            },
        });

        if (modalNum === 1) { // 닉네임 수정 모달
            return (
                <>
                    <Text variant="headlineMedium" style={styles.header}>닉네임 수정</Text>
                    <View style={styles.rowBox}>
                        <TextInput
                            style={styles.textInput}
                            value={nickname}
                            onChange={nickname => setNickname(nickname)}
                            activeUnderlineColor="#FCD34D"
                            mode="flat"
                        />
                        <IconButton style={styles.iconBtn} icon={"check"} size={30} iconColor="white" onPress={() => {
                                // TODO : 닉네임 수정 정보 전송
                                hideModal();
                                showDialog();
                            }}
                        />
                    </View>
                </>
            );
        } else if (modalNum === 2) { // 프로필 이미지 변경 모달
            return (
                <Text>프로필 이미지 변경창</Text>
            );
        } else if (modalNum === 3) { // 프로필 뮤직 변경 모달
            return (
                <KeyboardAvoidingView
                    style={styles.modal}
                    behavior="height"
                >
                    <Text variant="headlineMedium" style={styles.header}>프로필 뮤직 수정</Text>
                    <Searchbar
                            placeholder="음악을 검색하세요"
                            rippleColor="#FCD34D"
                            style={styles.searchBar}
                            // placeholderTextColor="white"
                            iconColor="#FCD34D"
                            onChangeText={onChangeSearch}
                            value={searchQuery}
                            onIconPress={() => {
                                console.log("asdasd");
                                Keyboard.dismiss();
                            }}
                            onSubmitEditing={() => {
                                console.log("qqqqq");
                            }}
                    />
                    {musicData.length !== 0 ? (
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={musicData}
                            renderItem={({item}) => (
                                <>
                                    <View style={styles.searchItemBox}>
                                        <Card.Cover
                                            source={item.image}
                                            style={styles.searchItemCover}
                                        />
                                        <View style={styles.searchItemText}>
                                            <Text variant="titleMedium">{item.musicTitle}</Text>
                                            <Text variant="titleSmall">{item.artist}</Text>
                                        </View>
                                        <View style={styles.addBtnBox}>
                                            <IconButton
                                                style={styles.addBtn}
                                                icon={"plus"}
                                                iconColor="white"
                                                onPress={() => {
                                                }}
                                            />
                                        </View>
                                    </View>
                                </>
                            )}
                        />
                    ) : (
                        <Text variant="bodyLarge" style={styles.emptyText}>검색 내용이 없습니다😅</Text>
                    )}
                </KeyboardAvoidingView>
            );
        } else if (modalNum === 4) { // 선호 장르 변경 모달
            useEffect(() => {
                if (visible) {
                    countUp();
                }
            }, []);
            return (
                <>
                    <Text variant="headlineMedium" style={styles.header}>선호 장르 수정</Text>
                    <View style={styles.chipBox}>
                        <Text variant="bodyMedium">*최대 5개 선택 가능</Text>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            numColumns={3}
                            data={AllGenre}
                            renderItem={({item}) => (
                            <View style={styles.chipContainer}>
                                {item.selected === false ?
                                <Chip key={item.id} style={styles.chip} onPress={() => handleChipClick(item.id)}>
                                    {item.genre}
                                </Chip>
                                :
                                <Chip key={item.id} style={styles.selectedChip} textStyle={{color: "white"}} onPress={() => handleChipClick(item.id)}>
                                    {item.genre}
                                </Chip>
                                }
                            </View>
                            )}
                        />
                    </View>
                    <View style={styles.genreBox}>
                        <IconButton style={styles.checkBtn}   icon={"check"} size={30} iconColor="#FCD34D" onPress={() => {
                                // TODO : 선호 장르 수정 api 호출
                                hideModal();
                                showDialog();
                            }}
                        />
                    </View>
                    <View style={styles.snackbarContainer}>
                        <Snackbar
                            duration={Snackbar.DURATION_SHORT}
                            style={styles.snackbar}
                            visible={snackbarVisible}
                            onDismiss={onDismissSnackBar}
                            iconAccessibilityLabel={"Close icon"}
                            action={{
                                label: '닫기',
                                textColor: "black",
                                onPress: () => {
                                    // Do something
                                },
                            }}>
                            <Text variant="bodyMedium">다섯개까지만 선택이 가능합니다 !</Text>
                        </Snackbar>
                    </View>
                </>
            );
        }
    };

    return (
        <PaperProvider>
            <View style={styles.mainBg}>
                <BackTopbar title={"프로필 수정"} />
                <DialogComponent />
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