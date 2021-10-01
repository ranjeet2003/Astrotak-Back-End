const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Defining the schemas of Astrologers
const astroSchema = new Schema({
  id: { type: String },
  urlSlug: { type: String },
  namePrefix: { type: Boolean },
  firstName: { type: String },
  lastName: { type: String },
  aboutMe: { type: String },
  profliePicUrl: { type: Boolean },
  experience: { type: Number },
  languages: Array,
  minimumCallDuration: { type: Number },
  minimumCallDurationCharges: { type: Number },
  additionalPerMinuteCharges: { type: Number },
  isAvailable: { type: Boolean },
  rating: { type: Number },
  skills: { type: Array },
  isOnCall: { type: Boolean },
  images: {
    large: {
      imageUrl: { type: String },
      id: { type: Number },
    },
    medium: {
      imageUrl: {
        type: String,
        default:
          "https://tak-astrotak-av-dev.s3.ap-south-1.amazonaws.com/astro-images/agents/1.png",
      },
      id: { type: Number },
    },
  },
  availability: {
    days: { type: Array },
    slot: {
      toFormat: { type: String },
      fromFormat: { type: String },
      from: { type: String },
      to: { type: String },
    },
  },
});
//Exporting the model
module.exports = mongoose.model("Astros", astroSchema);
