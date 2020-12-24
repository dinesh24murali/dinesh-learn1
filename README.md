# dinesh-learn1

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/dinesh-learn1.svg)](https://www.npmjs.com/package/dinesh-learn1) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save dinesh-learn1
```

## Usage

```jsx
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
```

## License

MIT © [dinesh24murali](https://github.com/dinesh24murali)
