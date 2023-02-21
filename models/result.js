const resultSchema = new Schema({
    symbol: { type: String, required: true },
    regularMarketDayHigh: { type: Number },
    fullExchangeName: { type: String, default: 0 }
})


module.exports = resultSchema