import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ChakraProvider} from '@chakra-ui/react';
import {extendTheme} from '@chakra-ui/react';
import '@fontsource/raleway/400.css';
import {disableReactDevTools} from "@fvilers/disable-react-devtools";

if (process.env.NODE_ENV === 'production') disableReactDevTools();

const theme = extendTheme({

    fonts: {
        heading: `'Raleway', sans-serif`,
        body: `'Raleway', sans-serif`,
    },
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
                <App />
        </ChakraProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();