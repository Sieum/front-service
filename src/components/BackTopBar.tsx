import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Divider, Appbar} from 'react-native-paper';

interface BackTopBarProps {
    title: string;
    iconName?: string;
}

const BackTopbar: React.FC<BackTopBarProps> = ({
    title,
    iconName,
}) => {

    const topbarStyle = StyleSheet.create({

        topbar: {
            alignItems: "center",
            textAlign: 'center',
        },
        title: {
            flex: 1,
            textAlign: "center",
            alignContent: "center",
        },
    });

    const navigation = useNavigation();

    return (
        <>
        <Appbar.Header style={topbarStyle.topbar}>
            <Appbar.BackAction onPress={() => {
                navigation.goBack();
            }}/>
            <Appbar.Content title={title} style={topbarStyle.title}/>
            {
                iconName !== undefined ?
                <Appbar.Action icon={iconName} onPress={() => {}} />
                : null
            }
        </Appbar.Header>
        <Divider />
        </>
    );
};

export default BackTopbar;
