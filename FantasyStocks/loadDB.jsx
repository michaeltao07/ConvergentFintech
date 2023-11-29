import React, {useState} from 'react';
import axios from 'axios';
import firebase from '../firebase';
import {addDoc, collection} from '@react-native-firebase/firestore';

async function loadUsers(user) {
    const [name, setName] = useState("")
    const [stocks, setStocks] = useState("")
    const collect = firebase.firestore().collection('users')
    collect.addDoc(user)
    const userRef = firebase.firestore().collection('users').doc(user);
    const doc = await userRef.get();
    // need to set name to user
}

async function addStock(userId, stockTicker) {
    const userRef = firebase.firestore().collection('users').doc(userId);
    const doc = await userRef.get();
    
    if (doc.exists) {
      return userRef.update({
        stocks: firebase.firestore.FieldValue.arrayUnion(stockTicker)
      });
    } else {
      throw new Error('User does not exist');
    }
}
  
  async function removeStock(userId, stockTicker) {
    const userRef = firebase.firestore().collection('users').doc(userId);
    const doc = await userRef.get();
    
    if (doc.exists) {
      return userRef.update({
        stocks: firebase.firestore.FieldValue.arrayRemove(stockTicker)
      });
    } else {
      throw new Error('User does not exist');
    }
}

async function tradeStocks(user1, user2, user1Gives, user2Gives) {
    addStock(user1, user2Gives)
    addStock(user2, user1Gives)
    removeStock(user1, user1Gives)
    removeStock(user2, user2Gives)
}