import React from 'react'
import {shallow} from 'enzyme'

import EmptyStateComponent from './EmptyStateComponent'

describe('EmptyStateComponent', () => {

    it('should render', () => {
        shallow(<EmptyStateComponent />)
    })

})
