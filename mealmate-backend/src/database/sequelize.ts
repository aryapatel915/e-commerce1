import { Sequelize } from "sequelize-typescript";
import Users from "./models/userModel";
import UserDetails from "./models/usrDetailsModel";
import Review from "./models/reviewModel";
import Product from "./models/productModel";
import ProductImage from "./models/productImageMOdel";
import Order from "./models/orderModel";
import OrderItem from "./models/orderItemModel";
import Inventory from "./models/inventoryModel";
import Category from "./models/categoriesModel";
import path from "path";


const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    // password: 'prince@2310',
    // database: 'ecommercedata',
    password: 'arya915',
    database: 'eccomerce',
    models: [path.join(__dirname, 'models')],
    dialectOptions: {
      options: {
        encrypt: true,
        enableArithAbort: true,
        debug: {
          packet: true,
          data: true,
          payload: true,
        },
      },
    },
    logging: console.log,
  });
  


export default sequelize;