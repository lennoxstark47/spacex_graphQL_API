import { React, Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.png';

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql',
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className='container'>
					<img
						src={logo}
						alt='spaceX'
						style={{
							width: 300,
							display: 'block',
							margin: 'auto',
						}}
					/>
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
