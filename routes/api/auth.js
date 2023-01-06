const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../schemas/user");
require("dotenv").config();
const secret = process.env.SECRET;
const ctrl = require("../../controller/auth");
const { validateBody, authenticate } = require("../../middlewares");
const {schemas} = require('../../models/user')

router.post("/users/register", validateBody(schemas.registerSchema), ctrl.register)

router.post("/users/login", validateBody(schemas.loginSchema), ctrl.login)

router.get('/users/current', authenticate, ctrl.getCurrent)

router.post('/users/logout', authenticate, ctrl.logout)

module.exports = router;
