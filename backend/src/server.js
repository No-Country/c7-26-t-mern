const { app } = require('./app');

// Utils
const { initModels } = require('./models/initModels');
const { db } = require('./utils/database.util');

const startServer = async () => {
	try {
		await db.authenticate();

		// Establish the relations between models
		initModels();

		await db.sync({ force: true });

		// Set server to listen
		const PORT = process.env.PORT || 4000;

		app.listen(PORT, () => {
			console.log('Express app running! at port:', PORT);
		});
	} catch (error) {
		console.log(error);
	}
};

startServer();
