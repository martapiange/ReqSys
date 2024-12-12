"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_1 = require("aurelia");
var my_app_1 = require("./my-app");
aurelia_1.default
    .app(my_app_1.MyApp) //launching of the first page
    .start();
