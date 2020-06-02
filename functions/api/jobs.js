const { db } = require('../util/admin')

exports.createJob = (req, res) => {
  const newJob = {
    company: req.body.company,
    datePosted: new Date().toISOString(),
    description: req.body.description,
    title: req.body.title,
    url: req.body.url
  }

  db.collection('jobs')
    .add(newJob)
    .then(doc => {
      return res.json({
        id: doc.id,
        ...newJob
      })
    })
    .catch(err => {
      res.status(500).json({
        error: err.code
      })
    })
}

exports.retrieveAllJobs = (req, res) => {
  db.collection('jobs')
    .orderBy('datePosted', 'desc')
    .get()
    .then(data => {
      let jobs = []
      data.forEach(doc => {
        jobs.push({
          id: doc.id,
          company: doc.data().company,
          datePosted: doc.data().datePosted,
          description: doc.data().description,
          title: doc.data().title,
          url: doc.data().url
        })
      })
      return res.json(jobs)
    })
    .catch(err => {
      return res.status(500).json({
        error: err.code
      })
    })
}

exports.updateJob = (req, res) => {
  if (req.body.id || req.body.datePosted) {
    res.status(403).json({
      message: 'Forbidden'
    })
  }

  const { jobId } = req.params
  const document = db.doc(`/jobs/${jobId}`)

  document
    .update(req.body)
    .then(data => {
      return res.json({
        message: 'Updated successfully'
      })
    }) 
    .catch(err => {
      return res.status(500).json({
        error: err.code
      })
    })
}

exports.deleteJob = (req, res) => {
  const { jobId } = req.params
  const document = db.doc(`/jobs/${jobId}`)

  document
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({
          error: 'Job not found'
        })
      }
      return document.delete()
    })
    .then(() => {
      return res.json({
        message: 'Delete successful!'
      })
    })
    .catch(err => {
      return res.status(500).json({
        error: err.code
      })
    })
}