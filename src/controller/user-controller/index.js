const { Traveller } = require('../../model');
const { HttpResponse, Operations } = require('../../helpers');

function parseData(data) {
  const interests = [];
  let status;

  if (data.interest.includes(',')) {
    const list = data.interest.split(',');

    list.forEach(val => {
      interests.push(val);
    });
  } else {
    interests.push(data.interest);
  }

  if (data.status === 'Yes') {
    status = 'Single';
  } else if (data.status === 'No') {
    status = 'In A Relationship';
  } else {
    status = 'N/A';
  }

  return { interests, status };
}

function randomNumber(max) {
  return Math.floor(Math.random() * max) + 0;
}

// Handlers
const createUser = async (req, h) => {
  const Model = Traveller();
  const response = new HttpResponse();
  const ops = new Operations();

  const data = {
    name: req.payload.name,
    messengerUserId: req.payload['messenger id'],
    nickName: req.payload['nick name'],
    interest: parseData(req.payload).interests,
    setting: req.payload.setting,
    status: parseData(req.payload).status,
    gender: req.payload.gender,
    description: req.payload.description,
    personality: !req.payload.personality ? [] : req.payload.personality,
  };

  const result = await ops.create(Model, data);

  return response.respond(h, true, result, response.httpStatusCode.ok, 200);
};

const findUser = async (req, h) => {
  const Model = Traveller();
  const response = new HttpResponse();
  const ops = new Operations();

  const result = await ops.getQuery(Model, {
    messengerUserId: req.params.user,
  });

  if (!result) {
    // Return a result here...
    const qr = response.quickReplies(
      [{ button: 'Take Assesment', block: 'Terms & Conditions' }],
      `It seems your first time exploring here would you like me to asses you before we start finding your bud shall we? :)`
    );

    return response.chatfuelRespond(h, qr, 200);
  }

  return response.respond(h, true, result, response.httpStatusCode.ok, 200);
};

const deleteUser = async (req, h) => {
  const Model = Traveller();
  const response = new HttpResponse();
  const ops = new Operations();

  const result = await ops.getQuery(Model, {
    messengerUserId: req.params.user,
  });

  if (result && result._id) {
    await ops.delete(Model, result._id);

    const msg = response.sendTextMessage(
      'Ayt! talk to you soon you can just come back any time you want.'
    );

    return response.chatfuelRespond(h, msg, 200);
  }

  return response.respond(h, true, result, response.httpStatusCode.ok, 200);
};

const findUsers = async (req, h) => {
  //   const Model = Traveller();
  //   const response = new HttpResponse();
  //   const ops = new Operations();

  //   const myDtl = await ops.getQuery(Model, { messengerUserId: req.params.user });
  //   const result = await ops.list(Model);

  //   if (myDtl && myDtl.interest) {
  //     const { interest } = myDtl;

  //     // interest.forEach(val => {

  //     // });
  //   }
  const picks = [];
  //   if (result && result.length !== 0) {
  let ctr = 0;
  // let randomPick;

  while (ctr <= 4) {
    //   randomPick = result[randomNumber(result.length)];
    picks.push({
      title: 'Martin Martin',
      image_url: 'https://profiles.utdallas.edu/img/default.png',
      subtitle: 'I am Martin...',
      buttons: [{ type: 'json_plugin_url', url: '', title: 'Invite' }],
    });
    ctr += 1;
  }
  //   }
  const gallery = response.gallery(picks);
  return response.chatfuelRespond(h, gallery, 200);
};

module.exports = {
  createUser,
  findUser,
  findUsers,
  deleteUser,
};
