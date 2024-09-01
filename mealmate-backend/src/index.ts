import express from "express";
import cors from 'cors';
import path from "path";
import session from 'express-session';
import sequelize from "./database/sequelize";
import passport from './common/strategies/localstrategy'
import { error } from "console";
import userRoutes from './routes/userRoutes'
import bodyParser from "body-parser";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({origin : "*"}))
app.use('/upl',express.static(path.join(__dirname, 'common/multer/my-uploads')));
console.log('__dirname: ', __dirname);

app.use(session({
    secret: 'ashutosh',
    resave: false,
    saveUninitialized: false
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());
  const PORT = 3000

  app.use('/user',userRoutes)
  sequelize.authenticate()
  .then(() => {
    console.log("Connection established successfully.");
    return sequelize.sync({alter : true});
  })
  .then(() => {
    console.log("Database synchronized successfully.");
    app.listen(PORT, () => {
      console.log("🚀 ~ app.listening on this :", PORT);
    });
  })
  .catch((error) => {
    console.log("🚀 ~ sequelize.authenticate ~ error:", error);
  });
  
