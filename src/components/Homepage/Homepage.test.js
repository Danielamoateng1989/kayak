import React from 'react'
import {render, cleanup} from '@testing-library/react'
import Homepage from './Homepage'



afterEach(cleanup)
 
 it('should take a snapshot', () => {
    const { asFragment } = render(<Homepage />)
    
    expect(asFragment(<Homepage />)).toMatchSnapshot()
})
