import React from 'react';
import { render } from 'react-dom';
import { Pet } from './Pet';

const App = () => {
  return React.createElement('div', { id: 'something-important' }, [
    React.createElement('h1', {}, 'Adopt-me!'),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet)
  ]);
};

render(React.createElement(App), document.getElementById('root'));
