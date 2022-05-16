import { Schema, model, models } from 'mongoose';

const WebsiteSchema = new Schema({
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
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = models.Website || model('Website', WebsiteSchema)