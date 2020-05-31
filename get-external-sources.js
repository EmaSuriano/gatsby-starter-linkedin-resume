const { writeFileSync } = require('fs');
const fetch = require('node-fetch');
const { RESUME_PATH } = require('./lib/utils/path');
require('dotenv').config();

const main = async () => {
  const { RESUME_JSON } = process.env;

  if (RESUME_JSON) {
    console.log('Downloading the resume from the external resource');
    await fetch(RESUME_JSON)
      .then((x) => x.json())
      .then((json) =>
        writeFileSync(RESUME_PATH, JSON.stringify(json, null, 2)),
      );
  }
};

main();
