import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', { id: 'something-important' }, [
    React.createElement('h1', {}, 'Adopt-me!'),
    React.createElement(Pet, {
      name: 'Kika',
      animal: 'dog',
      breed: 'mix'
    }),
    React.createElement(Pet, {
      name: 'Keka',
      animal: 'dog',
      breed: 'mix'
    }),
    React.createElement(Pet, {
      name: 'Rufus',
      animal: 'dog',
      breed: 'Lhasa-Apsu'
    })
  ]);
};

render(React.createElement(App), document.getElementById('root'));
