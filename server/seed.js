const { devices,carts } =require( "./seedData")
const { sequelize } =require( "./db")
const { Devices } =require( "./models")
const { Cart } =require( "./models")

const seed = async () => {
  try {
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    // insert data
    await Promise.all(devices.map((device) => Devices.create(device)));
    await Promise.all(carts.map((cart) => Cart.create(cart)));

    console.log("db populated!");
  } catch (error) {
    console.error(error);
  }
};

seed();
