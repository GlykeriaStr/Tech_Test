const mongoose = require("mongoose");

const Schema = mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
