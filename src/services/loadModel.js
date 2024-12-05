const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/cancer-predictions-storage/model-in-prod/model.json');
}
module.exports = loadModel;