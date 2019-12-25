import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Trendings from '~/pages/trendings';
import Favorites from '~/pages/favorites';
import TabBar from '~/components/tabBar';
import { colors } from './styles';

const Routes = createAppContainer(createBottomTabNavigator(
    { 
        'Populares': Trendings,
        'Favoritos': Favorites,
    },
    {
        tabBarComponent: TabBar,
        tabBarOptions: {
            activeTintColor: colors.primary,
            inactiveTintColor: colors.white,
          }
    },

));

export default Routes;

  