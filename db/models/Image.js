import { Schema, model, models } from 'mongoose';

const ImageSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
})

module.exports = models.Image || model('Image', ImageSchema)