/**
 * 
 * @param {number} money  123456.44
 * @param {string} symbol $ | ￥
 * @returns string
 */
export function formatMoney(money, symbol = '￥') {
    let str = money.toFixed(2)  // 只取2位小数
    let l = str.split('.')[0] // 获取整数位
    let r = str.split('.')[1] // 获取小数位
    let arr = [] // 用于保存结果

    let len = Math.ceil(l.length / 3) // 3位数一个 `,`
    for (let i = 0; i < len; i++) {
        arr.unshift(l.slice(-3 * (i + 1), -3 * i || undefined)) // 如果传(-3,0)获取不到参数，将0换成undefined相当于没传
        if (i !== len - 1) { // 最后一次截取不加 `,`了
            arr.unshift(',')
        }
    }
    if (r === '00') {
        return symbol + arr.join('');
    }
    return symbol + arr.join('') + '.' + r;
}