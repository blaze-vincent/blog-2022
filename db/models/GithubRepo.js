import { Schema, model, models } from 'mongoose';

const GithubRepoSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
})

module.exports = models.GithubRepo || model('GithubRepo', GithubRepoSchema)