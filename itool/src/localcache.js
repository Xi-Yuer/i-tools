//缓存的工具
class LocalCache {
    // 存
    setCache(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    // 取
    getCache(key) {
        const value = window.localStorage.getItem(key)
        //  判断value是否有值
        if (value) {
            return JSON.parse(value) //返回值
        }
    }
    // 删除存储
    deleceCache(key) {
        window.localStorage.removeItem(key)
    }
    // 清除所有缓存
    clearCache() {
        window.localStorage.clear()
    }
}
export default new LocalCache()