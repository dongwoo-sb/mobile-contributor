// const IMAGES = [
//   require('./mockImages/sky.jpg'),
//   require('./mockImages/bermuda.jpg'),
//   require('./mockImages/lake.jpg'),
//   require('./mockImages/mountain.jpg'),
//   require('./mockImages/wheat.jpg'),
//   require('./mockImages/alpine.jpg'),
//   require('./mockImages/coloseum.jpg'),
//   require('./mockImages/floor.jpg'),
//   require('./mockImages/gym.jpg'),
//   require('./mockImages/office.jpg'),
//   require('./mockImages/pyramid.jpg'),
//   require('./mockImages/santorini.jpg'),
//   require('./mockImages/view.jpg'),
//   require('./mockImages/confusedBeardedMan.jpg'),
//   require('./mockImages/happydanceGirl.jpg'),
//   require('./mockImages/girl.jpg'),
//   require('./mockImages/womanRunning.jpg'),
//   require('./mockImages/womanRunsTrack.jpg'),
//   require('./mockImages/worriedMan.jpg'),
// ];

metaData = [
  {title: 'sky texture', type: 'image'},
  {title: 'bermuda warwick ocean beach', type: 'image'},
  {
    title: 'beautiful lake landscape',
    type: 'image',
  },
  {
    title: 'alpes mountain dolomites',
    type: 'image',
  },
  {title: 'Wheat field', type: 'image'},
  {title: 'alpine mountain', type: 'image'},
  {title: 'coloseum rome', type: 'image'},
  {title: 'floor office', type: 'image'},
  {title: 'gym basketball', type: 'image'},
  {title: 'office outside', type: 'video'},
  {title: 'pyramid glass', type: 'video'},
  {title: 'santorini beautiful', type: 'video'},
  {title: 'view night', type: 'image'},
  {title: 'confused bearded man', type: 'image'},
  {title: 'happy dance girl', type: 'audio'},
  {title: 'girl smile face', type: 'image'},
  {title: 'woman running outside', type: 'video'},
  {title: 'woman running track', type: 'image'},
  {title: 'worried man', type: 'image'},
];

export default metaData.map((x, i) => ({
  ...x,
  tags: ['cool', 'pretty'],
  //   image: IMAGES[i],
}));