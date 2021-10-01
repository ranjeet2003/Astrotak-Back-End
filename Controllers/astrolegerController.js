const Astros = require("../Models/Astrologer"); // Importing the Astros Schema
const HttpError = require("../utils/http-error"); // Utility function to display production error

// API to search the Astros
exports.search = async (req, res, next) => {
  let astro;
  try {
    astro = await Astros.find({
      $or: [
        { firstName: req.body.firstName },
        { lastName: req.body.lastName },
        { languages: req.body.languages },
        { skills: req.body.skills },
      ],
    });
  } catch (err) {
    const error = new HttpError(
      "Fetching astros failed, please try again later.",
      500
    );
    return next(error);
  }
  res.status(200).json({ status: "success", responseData: astro });
};

//API to Filter the astroes based on skill and language
exports.filterData = async (req, res, next) => {
  const { skills, languageSpoken } = req.body;
  let filteredResult;
  try {
    filteredResult = await Astros.find({
      languages: languageSpoken,
      skills: skills,
    });
  } catch (err) {
    const error = new HttpError(
      "Fetching astros failed, please try again later.",
      500
    );
    return next(error);
  }
  res.status(200).json({ status: "success", responseData: filteredResult });
};

// API to sort the data based on rating
exports.sortByRating = async (req, res, next) => {
  const sortedRating = req.body.sortedRating;
  console.log(sortedRating);
  let sortedResult;
  try {
    sortedResult = await Astros.find({ rating: { $gte: sortedRating } });
  } catch (err) {
    const error = new HttpError(
      "Fetching astros failed, please try again later.",
      500
    );
    return next(error);
  }
  res.status(200).json({ status: "success", responseData: sortedResult });
};

// API to sort the data based on experience
exports.sortByExperience = async (req, res, next) => {
  const rating = req.body.experience;
  let sortedResult;
  try {
    sortedResult = await Astros.find({
      experience: { $gte: rating },
    });
  } catch (err) {
    const error = new HttpError(
      "Fetching astros failed, please try again later.",
      500
    );
    return next(error);
  }
  res.status(200).json({ status: "success", responseData: sortedResult });
};

// API to sort the data based on pricing
exports.sortByCharge = async (req, res, next) => {
  const charge = req.body.charge;
  let sortedResult;
  try {
    sortedResult = await Astros.find({
      minimumCallDurationCharges: { $lte: charge },
    });
  } catch (err) {
    const error = new HttpError(
      "Fetching astros failed, please try again later.",
      500
    );
    return next(error);
  }
  res.status(200).json({ status: "success", responseData: sortedResult });
};

// API to insert the data of astologists.(Used for inserting the record into mongoDB atlas (cloud) database)
exports.insertData = async (req, res, next) => {
  let newAstro;
  try {
    console.log("Inside try block");
    newAstro = await Astros.create({
      id: req.body.id,
      urlSlug: req.body.urlSlug,
      namePrefix: req.body.namePrefix,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      aboutMe: req.body.aboutMe,
      profliePicUrl: req.body.profliePicUrl,
      experience: req.body.experience,
      languages: req.body.languages,
      minimumCallDuration: req.body.minimumCallDuration,
      minimumCallDurationCharges: req.body.minimumCallDurationCharges,
      additionalPerMinuteCharges: req.body.additionalPerMinuteCharges,
      isAvailable: req.body.isAvailable,
      rating: req.body.rating,
      skills: req.body.skills,
      isOnCall: req.body.isOnCall,
      images: req.body.images,
      availability: req.body.availability,
    });
    // console.log(newAstro);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ status: "success", responseData: newAstro });
};
