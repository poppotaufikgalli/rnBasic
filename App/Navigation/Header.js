import React from 'react';
import { useTheme, Appbar, TouchableRipple, Switch } from 'react-native-paper';

const Header =(props) => {
	const {scene} = props;
	const theme = useTheme();

	return(
		<Appbar.Header
			theme={{
        		colors: {
          			primary: theme?.colors.surface,
        		},
      		}}
		>
		   	<Appbar.Content title="Aplikasi Presensi" subtitle={scene.route?.name} />
		   	<Appbar.Action icon="magnify" onPress={() => {}} />
		</Appbar.Header>
	)
}

export default Header;