import { createRequire } from "module";
const require = createRequire(import.meta.url);
require("@babel/core").transform("code", {
  presets: ["@babel/preset-env"],
});

require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import db from "./database/index.js";
import router from "./routes/index.js";
import passport from "passport";
import session from "express-session";
import passportConfig from "./Config/passportConfig.js";

passportConfig(passport);

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/OJ", router);
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "CPEscort",
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.listen(process.env.PORT, () => {
  db()
    .then(() => {
      console.log("Server is Running!!!");
    })
    .catch((error) => {
      console.log("Server connection failed");
      console.log(error);
    });
});
