const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MetainfoSchema = new Schema({


  portfolio: {
    title: String,
    subTitle: String,
  },
  cv: {
    title: String,
    subTitle: String,
  },
  contact: {
    title: String,
    subTitle: String,
  }



}, { collection: "metainfo" });

mongoose.model('Metainfo', MetainfoSchema ,"metainfo");
const Metainfo = mongoose.model('Metainfo');

// const mModel = new Metainfo({

//   portfolio: {
//     title: "Portfolio",
//     subTitle: "Checkout my works",
//   },
//   cv: {
//     title: "Download my cv",
//     subTitle: "Aviable in three languages",
//   },
//   contact: {
//     title: "Let's talk",
//     subTitle: "Send me and e-mail"
//   }



// });
// mModel.save(function (err, doc) {
//   if (err) return console.error(err);
//   console.log("Document inserted succussfully!");
// });

module.exports = Metainfo;