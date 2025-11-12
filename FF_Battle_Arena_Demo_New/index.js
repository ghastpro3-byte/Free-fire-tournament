import React from 'react';
import { createRoot } from 'react-dom/client';
import FFBattleArena from './App.js';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<FFBattleArena />);