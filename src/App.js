import React from 'react';
import './App.css';
import BookInput from './components/BookInput';

import BookState from './components/context/BookState';

function App() {
  return (
    <div className="App">
      <BookState>
        <BookInput />
      </BookState>
    </div>
  );
}

export default App;
