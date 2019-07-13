import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="display-4 text-center mb-2">
                Simple Todo List with GSAP
              </div>
            </div>
          </div>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
