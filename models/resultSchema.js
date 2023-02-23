const resultSchema = new Schema({
    symbol: { type: String, required: true },
    regularMarketDayHigh: { type: Number, default: 0 },
    fullExchangeName: { type: String }
})
module.exports = resultSchema