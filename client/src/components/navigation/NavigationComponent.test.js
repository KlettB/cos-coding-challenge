import React from 'react'
import {shallow} from 'enzyme'

import NavigationComponent from "./NavigationComponent";

describe('NavigationComponent', () => {

    it('should render', () => {
        shallow(<NavigationComponent />)
    })

})
