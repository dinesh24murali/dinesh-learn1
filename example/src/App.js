import React, { useState } from 'react';

import { Input } from 'dinesh-learn1';
import 'dinesh-learn1/dist/index.css';

const App = () => {

  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return <Input
    placeholder="Create React Library Example 😄"
    value={value}
    handleChange={handleChange}
  />
};

export default App;
