import React from 'react';
import { render } from 'react-dom';

import t from './models/temperature';

import App from './components';

render(<App temperature={t} />, document.getElementById('root'));
