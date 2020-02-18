const _ = require('lodash');
const fs = require('fs');
const path = require('path');

const puzzleInput = fs.readFileSync(path.join(__dirname, '/puzzleInput.txt'), 'utf8')

const countLayers = (imageCode, width, height) => {
  return imageCode.length / (width * height)
}

const countZerosInLayer = (imageLayer) => {
  const zeroCount = _.countBy(imageLayer.split(''), d => d === '0')
  console.log(imageLayer, zeroCount)
  return zeroCount.true
}

const getLayers = (imageLayer, layerSize) => {
  console.log(imageLayer)
  const imageLayerArr = imageLayer.split('')
  const layers = []
  console.log('layers', layers)
  while (imageLayerArr.length > 0) {
    chunk = imageLayerArr.splice(0, layerSize)
    layers.push(chunk.join(''))
  }
  return layers
}


const checkImageForCorruption = (imageCode, width, height) => {
  const layers = getLayers(imageCode, width * height)

  return _.minBy(layers, countZerosInLayer)
}


module.exports = {
  countLayers,
  countZerosInLayer,
  getLayers,
  checkImageForCorruption
}