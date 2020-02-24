import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Home from './pages/Home';
import AddItem from './pages/AddItem';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    AddItem,
    Cart
  })
);

export default Routes;