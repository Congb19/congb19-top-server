const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("test", "test", "QWER1234", {
	host: "localhost",
	dialect: "mysql" /* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */,
});

const test = async () => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

test();
