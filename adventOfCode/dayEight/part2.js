const _ = require('lodash')
const {
  getLayers
} = require('./part1')

const getPixel = (pixels) => {
  let idx = 0
  let pixel = pixels[idx];
  // transparent
  while (pixel == 2) {
    idx++
    pixel = pixels[idx]
  }
  return pixel
}

const decodeImage = (imageCode, width, height) => {
  const image = []
  const layers = getLayers(imageCode, width * height);
  for (let i = 0; i < layers[0].length; i++) {
    let pixels = []
    for (let layer of layers) {
      pixels.push(+layer[i])
    }
    image.push(getPixel(pixels))
  }
  return _.map(_.chunk(image, width), c => c.join('')).join('\n').replace(/0/g, '#').replace(/1/g, '.')
}

module.exports = {
  getPixel,
  decodeImage
}