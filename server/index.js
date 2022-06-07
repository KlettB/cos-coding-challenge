const express = require('express')
const cors = require('cors')
const path = require('path')
const compression = require('compression');

const {setupCompanyMockData} = require('./setupMockData/setupCompanyMockData')
const companies = require('./resources/companies')

const PORT = process.env.PORT || 3030
const app = express()

app.use(compression())
app.use(cors())
app.use(express.static(path.resolve(__dirname, '../client/build')))

setupCompanyMockData()

app.get('/companies', companies.get)

app.get('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
})

app.listen(PORT, () => {
    console.log(`API is listening on ${PORT}`)
})
