import React, { useRef } from 'react';
import axios from 'axios';
import firebase from '../firebase';
import {addDoc, collection} from '@react-native-firebase/firestore';

const topStocks = {
    technology: [
        'ADBE', 'AMD', 'ABNB', 'ALGN', 'GOOGL', 'GOOG', 'AMZN', 'AEP', 'AMGN', 'ADI',
        'ANSS', 'AAPL', 'AMAT', 'ASML', 'AZN', 'TEAM', 'ADSK', 'ADP', 'BKR', 'BIIB',
        'BKNG', 'AVGO', 'CDNS', 'CHTR', 'CTAS', 'CSCO', 'CTSH', 'CMCSA', 'CEG', 'CPRT',
        'CSGP', 'COST', 'CRWD', 'CSX', 'DDOG', 'DXCM', 'FANG', 'DLTR', 'EBAY', 'EA',
        'ENPH', 'EXC', 'FAST', 'FTNT', 'GEHC', 'GILD', 'GFS', 'HON', 'IDXX', 'ILMN',
        'INTC', 'INTU', 'ISRG', 'JD', 'KDP', 'KLAC', 'LRCX', 'LCID', 'LULU', 'MAR',
        'MRVL', 'MELI', 'META', 'MCHP', 'MU', 'MSFT', 'MRNA', 'MDLZ', 'MNST', 'NFLX',
        'NVDA', 'NXPI', 'ODFL', 'ON', 'ORLY', 'PCAR', 'PANW', 'PAYX', 'PYPL', 'PEP',
        'PDD', 'QCOM', 'REGN', 'ROST', 'SGEN', 'SIRI', 'SBUX', 'SNPS', 'TSLA', 'TXN',
        'KHC', 'TTD', 'TMUS', 'VRSK', 'VRTX', 'WBA', 'WBD', 'WDAY', 'XEL', 'ZM', 'ZS'],
    finance: ['JPM', 'BAC', 'GS', 'C', /* ... add more tickers */],
    healthcare: ['JNJ', 'PFE', 'MRK', 'UNH', /* ... add more tickers */],
    // Add more sectors as needed
};