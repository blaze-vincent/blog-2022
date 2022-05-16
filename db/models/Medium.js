import { Schema, model, models } from 'mongoose';

const MediumSchema = new Schema({
  name: String,
})

module.exports = models.Medium || model('Medium', MediumSchema)