const { formatTime, padZero } = require('./src/format-time')

const { htmlEscape, htmlUnEscape } = require('./src/htmlEscape')

const { formatMoney } = require("./src/format-money")

const cache = require('./src/localcache')

module.exports = {
    formatTime,
    htmlEscape,
    htmlUnEscape,
    formatMoney,
    padZero,
    cache
}