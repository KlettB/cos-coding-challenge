const fs = require('fs')
const status = require('http-status')

get = (request, response) => {
    fs.readFile('server/mocks/companies.json', 'utf8', (error, data) => {
        if (error) {
            response.sendStatus(error.status || status.INTERNAL_SERVER_ERROR)
        } else {
            response.send(data)
        }
    })
}

module.exports = {
    get,
}
