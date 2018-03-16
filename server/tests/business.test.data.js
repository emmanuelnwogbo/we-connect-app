let newBusiness = {
  name: 'business 20',
  location: 'ikeja',
  category: 'art',
  id: '1',
};

let updatedBusiness = {
  name: 'business 90',
  location: 'i love this one',
  category: 'sex toys',
  userid: 1,
};

let updatedBusinessByUnloggedInUser = {
  name: 'business 90',
  location: 'i love this one',
  category: 'sex toys',
  userid: 20,
};

let loggedInUser = {
  name: 'emmanuel',
  reviewBody: 'loremhguhregedbyudyebduyrbftgyebryrgfbyrebferyhfrfyb hgjg',
  userid: 1,
};

let notloggedInUser = {
  name: 'jared',
  reviewBody: 'hrhfhhyfiufhrfujkhfiurhfiurrfijiurhf',
  userid: 90,
};

let emptyReviewloggedInUser = {
  name: 'jared',
  reviewBody: '',
  userid: 90,
};

export default {
  newBusiness,
  updatedBusiness,
  updatedBusinessByUnloggedInUser,
  loggedInUser,
  notloggedInUser,
  emptyReviewloggedInUser,
};
