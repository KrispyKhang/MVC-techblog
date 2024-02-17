const { User } = require("../models");

const userData = [
  {
    username: "Megan_Dunn",
    twitter: "Mdunn",
    github: "Mdunn",
    email: "MegDunn@gmail.com",
    password: "p@ssword123",
  },
  {
    username: "Amy_Smith",
    twitter: "AmySmith",
    github: "AmySmith",
    email: "A.Smithgmail.com",
    password: "p@ssword2",
  },
  {
    username: "Alex_Jones",
    twitter: "AlexJones",
    github: "A-Jones",
    email: "AJones123@gmail.com",
    password: "p@ssword3",
  },
  {
    username: "Kevin_Lee",
    twitter: "KevinLee",
    github: "KevinLee",
    email: "Levin@gmail.com",
    password: "p@ssword4",
  },
  {
    username: "Julia_Brown",
    twitter: "JuliaBrown",
    github: " JuliaBrown",
    email: "J.Brown@gmail.com",
    password: "p@ssword5",
  },
  {
    username: "Andy_Lam",
    twitter: "AndyLam",
    github: "AndyLam",
    email: "andyL@gmail.com",
    password: "p@ssword6",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
