import 'react-native-gesture-handler';
import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { PreferencesContext } from '../Context/PreferencesContext';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

//screen
import Header from './Header';
import DrawerContent from './DrawerContent';
import MainScreen from '../MainScreen';

function MyStack(){
	return(
		<Stack.Navigator
	    	mode="modal"
	    	screenOptions={({ navigation, route, scene }) => ({
		        header: props => <Header {...props} />,
		    })}
		    initialRouteName="Main"
	    >
	      	<Stack.Screen name="Main" component={MainScreen} />
	    </Stack.Navigator>
	)
}

const Navigation = () => {
	const [isThemeDark, setIsThemeDark] = React.useState(false);

	let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

	const toggleTheme = React.useCallback(() => {
	    return setIsThemeDark(!isThemeDark);
	}, [isThemeDark]);

	const preferences = React.useMemo(
	    () => ({
	      toggleTheme,
	      isThemeDark,
	    }),
	    [toggleTheme, isThemeDark]
	);

	return(
		<PreferencesContext.Provider value={preferences}>
			<PaperProvider theme={theme}>
				<NavigationContainer theme={theme}>
					<Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
				      	<Drawer.Screen name="Beranda" component={MyStack} />
				    </Drawer.Navigator>
				</NavigationContainer>
			</PaperProvider>
		</PreferencesContext.Provider>
	)
}

export default Navigation;





