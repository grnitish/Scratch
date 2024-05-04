// // Polyfills
// import 'es6-object-assign/auto';
// import 'core-js/fn/array/includes';
// import 'core-js/fn/promise/finally';
// import 'intl'; // For Safari 9

// import React from 'react';
// import ReactDOM from 'react-dom';

// import AppStateHOC from '../lib/app-state-hoc.jsx';
// import BrowserModalComponent from '../components/browser-modal/browser-modal.jsx';
// import supportedBrowser from '../lib/supported-browser';

// import styles from './index.css';
// import LiveCursors from './LiveCursors.jsx';

// const appTarget = document.createElement('div');
// appTarget.className = styles.app;
// document.body.appendChild(appTarget);

// if (supportedBrowser()) {
//     // require needed here to avoid importing unsupported browser-crashing code
//     // at the top level
//     require('./render-gui.jsx').default(appTarget);

// } else {
//     BrowserModalComponent.setAppElement(appTarget);
//     const WrappedBrowserModalComponent = AppStateHOC(BrowserModalComponent, true /* localesOnly */);
//     const handleBack = () => {};
//     // eslint-disable-next-line react/jsx-no-bind
//     ReactDOM.render(<WrappedBrowserModalComponent onBack={handleBack} />, appTarget);
// }

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
//import * as serviceWorker from './serviceWorker';

import { AblyProvider } from "ably/react";
//import Spaces from "@ably/spaces";
import { nanoid } from "nanoid";
//import { Realtime } from "ably";



import { Realtime } from "ably";
import Spaces from "@ably/spaces";
import { SpacesProvider, SpaceProvider } from "@ably/spaces/react";
import styles from './index.css'
const appTarget = document.createElement('div');
appTarget.className = styles.app;
document.body.appendChild(appTarget);

// const ably = new Realtime.Promise({ key: "", clientId: 'clemons' });
// const spaces = new Spaces(ably);

const client = new Realtime.Promise({
  clientId: nanoid(),
  key: "" ,
});
const spaces = new Spaces(client);

// console.log(spaces)
// console.log(client)
ReactDOM.render(
<SpaceProvider client={spaces}>
<SpaceProvider name="my-space">
      <App2 spaces={spaces}/>
    </SpaceProvider>
    </SpaceProvider>
  , appTarget);
