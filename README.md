# React Depth Chart

This a depth chart library made for react projects to depict market depth in a chart format.

## Installation

You can install this library using yarn (or npm):

```
yarn add react-depth-chart
```

```
npm install react-depth-chart
```

## Usage

To use this library, simply import DepthChart component and pass the necessary props.

```jsx
import React from 'react';
import { Input, Button } from '@timonwa/demo-ui-library';

function App() {
  return (
    <div>
      <Input
        id='name'
        disabled={false}
        label='Enter your name'
        message='This field is required'
        error={false}
        success={false}
        onChange={(e) => console.log(e.target.value)}
        placeholder='Enter your name here'
      />
      <Button
        size='medium'
        primary={true}
        disabled={false}
        text='Click me!'
        onClick={() => alert('Button clicked!')}
      />
    </div>
  );
}

export default App;
```

## Contributing

If you want to contribute, you are more than welcome to do so. Start by forking the repository and then sending a pull request with a proper description of the features or bugs that are worked upon in the pull request.

- Fork the repository.
- Clone the repository to your local machine.
- Install the dependencies using `yarn`.
- View the components in the browser using `yarn storybook`.
- Make your changes.
- Test the changes using `yarn test`.
- Build the library using `yarn build`.
- Commit the changes and push them to your forked repository.
- Send a pull request on GitHub

## License

This react depth chart library is licensed under the [MIT License](https://github.com/Pantelwar/react-depth-chart/blob/main/license).
