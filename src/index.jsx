import ReactDOM from "react-dom";
import React from 'react';

import App from "./components/App";
import PlayerList from "./stores/PlayerList";

import '../styles/index.styl';

const playerList = new PlayerList();

ReactDOM.render(
  <App playerList={playerList} />,
  document.getElementById('root')
);
