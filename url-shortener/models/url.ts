import mongoose from 'mongoose';

const URLSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  alias: {
    type: String,
    required: true,
    unique: true
  }
})

export default mongoose.models.URL || mongoose.model('URL', URLSchema)