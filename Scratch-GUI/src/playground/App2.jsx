// App2.jsx
import React from 'react';
import { Realtime } from 'ably';
import Spaces from "@ably/spaces";
import { SpaceProvider, SpacesProvider } from "@ably/spaces/react";
import LiveCursors from "./LiveCursors.jsx";
import { getSpaceNameFromUrl } from "../utils/helpers";
import ReactDOM from 'react-dom';
import AppStateHOC from '../lib/app-state-hoc.jsx';
import BrowserModalComponent from '../components/browser-modal/browser-modal.jsx';
import supportedBrowser from '../lib/supported-browser';
import styles from './index.css';

const spaceName = getSpaceNameFromUrl()

function App2({ spaces }) {
  

  return (
    <div className="App2">
      <header className="App-header">
        <SpacesProvider client={spaces}>
          <SpaceProvider name={spaceName}>
            <LiveCursors />
          </SpaceProvider>
        </SpacesProvider>
      </header>
    </div>
  );
}

export default App2;