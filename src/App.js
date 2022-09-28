import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
      </div>
    );
  }
}

export default App;

// Returning code based on a conditional with a standard if-statement:
// class App extends Component {
//   render() {
//     const name = 'Jack';
//     const loading = false;

//     if (loading) {
//       return <h4>Loading...</h4>;
//     }

//     return (
//       <div className='App'>
//         <h1>Hello {name}</h1>
//       </div>
//     );
//   }
// }

// *** *** ***

// Returning code based on a conditional with a ternary operator (which allows you to write and run the return all inside the return block, instead of defining the condition outside of the return):
// class App extends Component {
//   render() {
//     const name = 'Jack';
//     const loading = false;

//     return (
//       <div className='App'>
//         {loading ? <h4>Loading...</h4> : <h1>Hello {name}</h1>}
//       </div>
//     );
//   }
// }

// *** *** ***

// An additional step to support an else statement with the ampersand operator which effectifily reads as "only show the name if showName is true":
// class App extends Component {
//   render() {
//     const name = 'Jack';
//     const loading = false;
//     const showName = true;

//     return (
//       <div className='App'>
//         {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}
//       </div>
//     );
//   }
// }

// export default App;
