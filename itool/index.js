const { formatTime, padZero } = require('./js/src/format-time')

const { htmlEscape, htmlUnEscape } = require('./js/src/htmlEscape')

const { formatMoney } = require("./js/src/format-money")

const cache = require('./js/src/localcache')

module.exports = {
    formatTime,
    htmlEscape,
    htmlUnEscape,
    formatMoney,
    padZero,
    cache
}