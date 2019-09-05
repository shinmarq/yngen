const { BitlyClient } = require('bitly');

class Bitly {
  constructor() {
    this.result = {};
  }

  async shortenedURL(longUrl) {
    const bitly = new BitlyClient(process.env.ACCESS_TOKEN, {});

    try {
      this.result = await bitly.shorten(longUrl);
      return this.result;
    } catch (e) {
      throw e;
    }
  }
}

exports.Bitly = Bitly;
