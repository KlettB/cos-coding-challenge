import React from 'react'
import {shallow} from 'enzyme'

import CompanyListComponent from './CompanyListComponent'

describe('CompanyListComponent', () => {

    const companies = [{"companyName":"Friedeck Inc","companySpecialty":"Architecture","companyLanguage":"nl","companyStreet":"Schemas Lakes","companyCity":"Diegoberg","companyZip":"55010","companyPhone":"489-663-0324"}, {"companyName":"Friedeck Inc","companySpecialty":"Architecture","companyLanguage":"nl","companyStreet":"Schemas Lakes","companyCity":"Diegoberg","companyZip":"55010","companyPhone":"489-663-0324"}];
    const setSelectedCompany = jest.fn();

    it('should render', () => {
        shallow(<CompanyListComponent companies={companies} setSelectedCompany={setSelectedCompany} />)
    })

})
