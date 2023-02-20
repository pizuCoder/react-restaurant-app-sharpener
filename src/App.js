// import Header from './components/layout/Header';
import { Fragment, useState }from 'react';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';

function App() {
  const [cartShown, setCartShown] = useState(false)

  const showCartHandler = () => {
    setCartShown(true)
  }
  const hideCartHandler= () =>{
    setCartShown(false)
  }
  return (
    <Fragment>
      {cartShown && < Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart = {showCartHandler}/>
      <Meals />
    </Fragment>
  );
}

export default App;