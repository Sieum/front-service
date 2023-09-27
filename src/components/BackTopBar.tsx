import React from 'react';
import {StyleSheet} from 'react-native';
import {Divider, Appbar} from 'react-native-paper';

const BackTopbar = ({title}: any) => {
    const topbarStyle = StyleSheet.create({
        topbar: {
            alignItems: "center",
            textAlign: 'center',
        },
        title: {
            flex: 1,
            textAlign: "center",
        },
    });

    return (
        <>
            <Appbar.Header style={topbarStyle.topbar}>
                <Appbar.BackAction />
                <Appbar.Content title={title} style={topbarStyle.title}/>
            </Appbar.Header>
            <Divider />
        </>
    );
};

export default BackTopbar;