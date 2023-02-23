const { Schema, model } = require('mongoose')

const assetSchema = new Schema({
   symbol: { type: String, required: true },
   purchasePrice: { type: Number, default: 0 },
   shares: { type: Number, default: 0 },
   regularMarketDayHigh: { type: Number, default: 0 },
   fullExchangeName: { type: String }
})
const Asset = model('Asset', assetSchema)
module.exports = Asset