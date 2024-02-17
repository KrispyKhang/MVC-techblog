const { Post } = require("../models");

const postData = [
  {
    title: "Airbnb Clone is now live!",
    post_content:
      "A full-stack application that allows users to rent out their homes or rent others' homes. This app will use a MySQL database, Node.js, and the Express.js framework for the back end, and Handlebars.js for the front end. The app will be deployed to Heroku",
    user_id: 3,
  },
  {
    title: "Crypto Tracker is now available!",
    post_content:
      "A full-stack application that allows users to track the value of their cryptocurrency investments. This app will use a MySQL database, Node.js, and the Express.js framework for the back end, and Handlebars.js for the front end. The app will be deployed to Heroku",
    user_id: 1,
  },
  {
    title: "Is Tesla Doomed?",
    post_content:
      " Tesla has been a hot topic in the news lately. With the recent stock price drop, many are wondering if the company is in trouble. What do you think?",
    user_id: 2,
  },
  {
    title: "Facebook is now Meta!",
    post_content:
      "Facebook has rebranded to Meta. What do you think of the new name and logo?",
    user_id: 5,
  },
  {
    title: "NeuroLink is now live!",
    post_content:
      "Elon Musk's new company, NeuroLink, is now live. What do you think of the new technology?",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
