import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import YotwApp from './components/yotw-app';

ReactDOM.render(
    <MuiThemeProvider>
        <YotwApp />
    </MuiThemeProvider>,
    document.getElementById('main')
);
