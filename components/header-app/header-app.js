import React from 'react';

import './header-app.css';

const HeaderApp = ({toDo = 1, done = 3 }) => {
      return (
          <div className='app-header d-flex'>
                <h1>TodoList</h1>
                <h2 className="app-subheader">{toDo} more to do, {done} done</h2>
          </div>
      );
};

export default HeaderApp;