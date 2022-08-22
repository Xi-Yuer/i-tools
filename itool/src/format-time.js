/**
 * 
 * @param {string | number} str 时间字符串
 * @param {Boolean} isFullTime 是否显示完成的时间
 */
function formatTime(str,isFullTime = true){

    const dt = new Date(str)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return isFullTime ? `${y}年${m}月${d}日 ${hh}:${mm}:${ss}`:  `${hh}:${mm}:${ss}`

    
}

// 补零的函数
function padZero(n){
    return n > 9 ? n : '0' + n
}

module.exports = {
    formatTime,
    padZero
}