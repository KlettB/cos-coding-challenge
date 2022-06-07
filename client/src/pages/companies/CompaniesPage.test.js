import React from 'react'
import {shallow} from 'enzyme'

import CompaniesPage from "./CompaniesPage";

describe('CompaniesPage', () => {

    it('should render', () => {
        shallow(<CompaniesPage />)
    })

})
