import { Schema, model, models } from 'mongoose';

const CodeblockSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  images: [{//Image
    type: Schema.Types.ObjectID,
  }],
  technologies: [{//Medium
    type: Schema.Types.ObjectID
  }],
  githubRepo: {//GithubRepo
    type: Schema.Types.ObjectID
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
})

module.exports = models.Codeblock || model('Codeblock', CodeblockSchema)