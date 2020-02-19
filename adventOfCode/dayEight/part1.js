const _ = require('lodash');

const countLayers = (imageCode, width, height) => {
  return imageCode.length / (width * height)
}

const countDigitsInLayer = (imageLayer, digit) => {
  const digitCount = _.countBy(imageLayer.split(''), d => d === digit.toString())
  return digitCount.true || 0
}

const getLayers = (imageLayer, layerSize) => {
  const imageLayerArr = imageLayer.split('')
  return _.map(_.chunk(imageLayerArr, layerSize), ch => ch.join(''))
}

const checkImageForCorruption = (imageCode, width, height) => {
  const layers = getLayers(imageCode, width * height)

  const layerwithFewestZeros = _.minBy(layers, l => countDigitsInLayer(l, 0))
  const oneDigitsCount = countDigitsInLayer(layerwithFewestZeros, 1)
  const twoDigitsCount = countDigitsInLayer(layerwithFewestZeros, 2)
  return oneDigitsCount * twoDigitsCount
}

module.exports = {
  countLayers,
  countDigitsInLayer,
  getLayers,
  checkImageForCorruption
}