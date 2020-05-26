import Sequelize from 'sequelize'

const {DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME} = process.env
export const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
	host: DB_HOST,
	dialect: 'mysql',
	pool: {
		max: 99,
		min: 0,
		idle: 60000
	},
});

sequelize
	.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});
