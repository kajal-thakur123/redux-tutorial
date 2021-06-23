import React from 'react'

import User from './User';
function App() {
   return (
      <div className="App">
         <h1> <User data={{ name: "kajal", age: "23", email: "kajal@gmail.com" }} /></h1>
      </div>
   );
}

export default App;
