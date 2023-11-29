import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {tradeStocks} from 'loadDB'
import MainContainer from './MainContainer';

export default function App() {
  return (
    <MainContainer/>
  );
}
