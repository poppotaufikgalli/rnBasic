import React from 'react';
import { View } from 'react-native';
import { useTheme, Appbar, TouchableRipple, Switch, Text } from 'react-native-paper';
import { PreferencesContext } from '../Context/PreferencesContext';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  DrawerToggleButton,
} from '@react-navigation/drawer';

const DrawerContent =(props) => {
	const theme = useTheme();
  	const { toggleTheme, isThemeDark } = React.useContext(PreferencesContext);

	return(
		<DrawerContentScrollView {...props}>
    		<DrawerItemList {...props} />
    		<DrawerItem label="Syarat dan Ketentuan" onPress={() => {}} />
    		<DrawerItem label={({color}) => (
    			<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
    				<Text style={{color}}>Tema Gelap</Text>
    				<Switch
			          	color={'red'}
			          	onValueChange={() => toggleTheme()}
			          	value={isThemeDark}
			        />
    			</View>
    		)} />
    		<DrawerItem label="Tutup" onPress={() => {}} />
	  	</DrawerContentScrollView>
	)
}

export default DrawerContent;