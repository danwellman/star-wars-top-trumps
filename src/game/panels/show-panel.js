import React from 'react';

import { StartPanel } from './start-panel';
import { GamePanel } from './game-panel';

export function ShowPanel(props) {
  return (!props.isStarted)
    ? <StartPanel startCb={props.startCb} />
    : <GamePanel players={props.players} />
}
