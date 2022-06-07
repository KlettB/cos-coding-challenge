import React from 'react'
import {shallow} from 'enzyme'

import CompanyDetailsComponent from './CompanyDetailsComponent'

describe('CompanyDetailsComponent', () => {

    const selectedCompany = {"companyName":"Friedeck Inc","companySpecialty":"Architecture","companyLanguage":"nl","companyStreet":"Schemas Lakes","companyCity":"Diegoberg","companyZip":"55010","companyPhone":"489-663-0324"};

    it('should render', () => {
        shallow(<CompanyDetailsComponent selectedCompany={selectedCompany} />)
    })

})
