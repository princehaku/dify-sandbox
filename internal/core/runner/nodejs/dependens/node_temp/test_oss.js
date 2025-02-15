const OSS = require('ali-oss');

async function listBuckets() {
  try {
    console.log(OSS);
  } catch (err) {
    console.log(err);
  }
}

listBuckets();
