'use strict'

module.exports = {
    id: () => {
        const d = new Date()
        return Math.random().toString(36).slice(2, 5) + d.getTime().toString().slice(11,) + Math.random().toString(36).slice(5, 7)
    }
}