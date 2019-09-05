const fs = require('fs');
const { HttpResponse, Bitly } = require('../../helpers');

function logURLs(logs) {
  fs.writeFileSync(`src/tmp/logs-${Date.now()}.txt`, logs);
}

const shortenedUrl = async (req, h) => {
  const bitly = new Bitly();
  const response = new HttpResponse();
  const uri = req.payload.longUrl;
  try {
    const result = await bitly.shortenedURL(uri);

    // log
    logURLs(`ts: ${Date.now()} - long: ${uri}, short: ${result.url} `);

    return response.success(
      h,
      { shortUrl: result.url },
      response.httpStatusCode.ok,
      200
    );
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = { shortenedUrl };
