const { sequelize } =require( "../db");
const { Sequelize}= require( 'sequelize');


const Devices = sequelize.define("device", {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    // since we are searching, editing, deleting by slug, these need to be unique
    unique: true,
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  screenSize: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.NUMBER,
  },
  discount: {
    type: Sequelize.NUMBER,
  },
  image: {
    type: Sequelize.STRING,
  },
});
const Cart = sequelize.define("cart", {
  type: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  model: {
    type: Sequelize.STRING,
    allowNull: false,
    // since we are searching, editing, deleting by slug, these need to be unique
    unique: true,
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  screenSize: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.NUMBER,
  },
  discount: {
    type: Sequelize.NUMBER,
  },
  image: {
    type: Sequelize.STRING,
  },
});

module.exports= { db:sequelize , Devices,Cart }; 
