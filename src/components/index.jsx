import React from 'react';
import { observer } from 'mobx-react';

const App = observer(({ temperature }) => (
  <div>
    <p> {temperature.temperature} </p>
    <input type="text" onChange={temperature.setChar} />
  </div>
));

export default App;
