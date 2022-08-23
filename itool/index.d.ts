export declare function formatMoney(money: number, symbol: string): string
export declare function formatTime(str: Date, isFullTime: boolean): string
export declare function padZero(n: number): string
export declare function htmlEscape(htmlStr: string): string
export declare function htmlUnEscape(str: string): string

export interface ICache {
    setCache: (key: string, value: any) => void
    getCache: (key: string) => any
    deleceCache: (key: string) => void
    clearCache: () => void
}

export declare const cache: ICache