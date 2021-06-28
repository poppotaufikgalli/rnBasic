import React from 'react'
import {
  SafeAreaView,  
  StatusBar,
} from 'react-native';
import { useTheme, Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const MainScreen = () => {
	const theme = useTheme();
	
	return(
		<SafeAreaView style={{flex: 1, justifyContent: 'flex-start', margin: 5}}>
			<StatusBar animated={true} barStyle={theme.dark ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />
			<Card>
			    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
		    	<Card.Content>
		      		<Title>Card title</Title>
		      		<Paragraph>Card content</Paragraph>
			    </Card.Content>
			    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
			    <Card.Actions>
			      	<Button>Cancel</Button>
			      	<Button>Ok</Button>
		    	</Card.Actions>
		  	</Card>
		</SafeAreaView>
	)
}

export default MainScreen;