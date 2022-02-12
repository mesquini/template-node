const path = require('path')

const config = {
  mongodb: {
    url: require('dotenv').config().parsed.MONGO_URL,
    options: {
      useNewUrlParser: true,
    }
  },
  migrationsDir: path.resolve(__dirname, 'src', 'shared', 'infra', 'database', 'migrations'),
  changelogCollectionName: "changelog",
  migrationFileExtension: ".ts",
  useFileHash: false
};

module.exports = config;
