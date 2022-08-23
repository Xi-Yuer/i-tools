declare function formatMoney(money: number, symbol: string): string
declare function formatTime(str: Date, isFullTime: boolean): string
declare function padZero(n: number): string
declare function htmlEscape(htmlStr: string): string
declare function htmlUnEscape(str: string): string

interface ICache {
    setCache: (key: string, value: any) => void
    getCache: (key: string) => any
    deleceCache: (key: string) => void
    clearCache: () => void
}

declare const cache: ICache