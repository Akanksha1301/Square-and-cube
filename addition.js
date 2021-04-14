"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.additions = void 0;
var cube_1 = require("./cube");
var square_1 = require("./square");
var additions = function (x) {
    return cube_1.cube(x) + square_1.square(x);
};
exports.additions = additions;
