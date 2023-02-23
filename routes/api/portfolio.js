const portfolioController = require('../../controllers/api/portfolio')
router = require('express').Router()
router.get('./portfolio', portfolioController.getResults, portfolioController.index)