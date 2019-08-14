class Operations {
  constructor() {
    this._query = {};
  }

  async list(model, query, limit, skip) {
    this._query = query;
    return new Promise((resolve, reject) => {
      if (!this._query) {
        this._query = {};
      }

      model
        .find(this._query, null, { limit, skip })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
          console.log(err);
          throw err;
        });
    });
  }

  async create(model, data) {
    return new Promise((resolve, reject) => {
      model
        .create(data)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
          console.log(err);
          throw err;
        });
    });
  }

  async delete(model, id) {
    return new Promise((resolve, reject) => {
      model
        .findByIdAndRemove(id)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
          console.log(err);
          throw err;
        });
    });
  }

  async get(model, id) {
    return new Promise((resolve, reject) => {
      model
        .findById(id)
        .limit(1)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
          console.log(err);
          throw err;
        });
    });
  }

  async getQuery(model, query) {
    return new Promise((resolve, reject) => {
      model
        .findOne(query)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
          console.log(err);
          throw err;
        });
    });
  }

  async update(model, id, data) {
    return new Promise((resolve, reject) => {
      model
        .findByIdAndUpdate(
          id,
          { $set: data },
          {
            new: true,
          }
        )
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
          console.log(err);
          throw err;
        });
    });
  }
}

exports.Operations = Operations;
