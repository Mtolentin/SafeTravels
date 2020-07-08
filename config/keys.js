
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}
// module.exports = {
//   mongoURI: 'mongodb+srv://nakane:RPHxUejUm2Vss0Af@cluster0.pkbbp.mongodb.net/OCMdb?retryWrites=true&w=majority',
//   secretOrKey: "secret",
//   AWS_BUCKET_NAME: "our-choices-matter-seeds",
//   AWS_ACCESS_KEY_ID: "AKIAJQ26TWMMBK7TYEGA",
//   AWS_SECRET_ACCESS_KEY: "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",
//   AWS_REGION: "us-east-1",
//   AWS_URL_LINK: "https://s3-us-east-1.amazonaws.com/our-choices-matter/"
// }

