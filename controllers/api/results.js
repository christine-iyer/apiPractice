// /controllers/api/results

const Result = require('../../models/result')

module.exports = {
    resultsComplete,
    resultsUp,
    resultsDown,
    show,
    jsonResults,
    jsonResult
}


// jsonResults, jsonResult

function jsonResult (req, res){
    res.json(res.locals.data.result)
}

function jsonResults (req, res){
    res.json(res.locals.data.results)
}


// read - results, show
async function resultsComplete(req, res, next){
    try {
        const results = await Result.find({ completed: true })
        res.locals.data.results = results
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}

async function resultsUp(req, res, next){
    try {
        const results = await Result.find({ completed: false })
        res.locals.data.results = results
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}

async function resultsDown(req, res, next){
     try {
         const results = await Result.find({ completed: false })
         res.locals.data.results = results
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })       
     }
 }

async function show(req, res, next){
    try {
        const result = await Result.findById(req.params.id)
        res.locals.data.result = result
        next()
    } catch (error) {
        res.status(400).json({ msg: error.message })       
    }
}


