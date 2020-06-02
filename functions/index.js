const functions = require('firebase-functions');
const app = require('express')();

const {
  createJob,
  retrieveAllJobs,
  updateJob,
  deleteJob
} = require('./api/jobs')

app.get('/jobs', retrieveAllJobs)
app.post('/jobs', createJob)
app.patch('/jobs/:jobId', updateJob)
app.delete('/jobs/:jobId', deleteJob)

exports.api = functions.https.onRequest(app)