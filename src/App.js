// import Header from './components/layout/Header';
import { Fragment } from 'react';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;