// import Header from './components/layout/Header';
import { Fragment } from 'react';
import MealsSummary from './components/Meals/MealsSummary';
import Header from './components/Layout/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <MealsSummary />
    </Fragment>
  );
}

export default App;