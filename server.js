const express = require('express');
const graphqlHTTP =
	require('express-graphql').graphqlHTTP;
const schema = require('./schema');

const app = express();

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`App is running on port ${port}`);
});
