import { Schema, model, models } from 'mongoose';

const ArtpieceSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  images: [{ //Image
    type: Schema.Types.ObjectID,
  }],
  craft: { //Medium
    type: Schema.Types.ObjectID
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = models.Artpiece || model('Artpiece', ArtpieceSchema)