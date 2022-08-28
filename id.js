const { randomBytes } = require('crypto')

module.exports = {
    id: randomBytes(5).toString('hex')
}