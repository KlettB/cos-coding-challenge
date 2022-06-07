const randopeep = require('randopeep')
const fs = require('fs')

module.exports.setupCompanyMockData = () => {
    class Company {
        constructor() {
            this.companyName = randopeep.corporate.name('large', 1),
            this.companySpecialty = ['Excavation', 'Plumbing', 'Electrical', 'Real Estate Development', 'Small Renovation Contraction', 'Architecture'][Math.floor(Math.random() * 6)],
            this.companyLanguage = ['de', 'en', 'nl', 'fr', 'es', 'ar'][Math.floor(Math.random() * 6)],
            this.companyStreet = randopeep.address.streetName(),
            this.companyCity = randopeep.address.city(),
            this.companyZip = randopeep.address.zip(),
            this.companyPhone = randopeep.address.phone()
        }
    }

    const companies = [...new Array(10)].map(() => new Company())

    fs.writeFileSync('server/mocks/companies.json', JSON.stringify(companies))
}
