import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createMuiTheme } from "@material-ui/core/styles";
import { StylesProvider, ThemeProvider, jssPreset } from "@material-ui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import './index.css'
import Timetablemanagement from './pages/Timetablemanagement';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
    const theme = createMuiTheme({
      direction: "rtl"
    });
    console.log('timetable', Timetablemanagement);
    ReactDOM.render(
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>,
      document.querySelector("#root")
    );
