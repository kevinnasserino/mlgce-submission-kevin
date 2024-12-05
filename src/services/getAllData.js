const { Firestore } = require('@google-cloud/firestore');
const path = require('path');

const pathKey = path.resolve('./firebase-key-predictions.json')

async function getAllData() {
    
const db = new Firestore({
        projectId: 'submissionmlgc-kevin-443802',
        keyFilename: pathKey,
      });

    const predictCollection = db.collection('predictions');
    const allData = await predictCollection.get();
    return allData;
}

module.exports = getAllData;