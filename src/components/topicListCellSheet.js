'use strict';

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

export const Style = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#E2E2E2'
    },
    avatar: {
        alignSelf: 'center',
        width: 50,
        height: 50,
        marginRight: 10,
        justifyContent: 'center',
        borderRadius: 3,
    },
    title: {
        fontSize: 14,
        textAlign: 'left',
        color: '#356DD0',
    },
    topic: {
        flex: 1,
        marginBottom: 5
    },
    info: {
        color: '#aaaaaa',
        fontSize: 12,
        textAlign: 'left',
        marginTop: 5,
    },
    content: {
        fontSize: 12,
        color: '#555555'
    },


    replyNumWrapper: {
        width: 30,
        height: 18,
        marginLeft: 5,
        marginRight: 2,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    replyNum: {
        backgroundColor: '#98acdf',
        flex: 1,
        alignItems: 'center',
        height: 18,
        justifyContent: 'center',
        borderRadius: 10,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
    },
    replyNumText: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    node_name: {
        backgroundColor: '#f5f5f5',
        color: '#778087',
        marginRight: 5
    },
    user: {
        color: '#666666',
        marginRight: 5,
        marginLeft: 5
    }
});
