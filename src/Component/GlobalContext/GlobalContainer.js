import React, { useState } from 'react'
import { GlobalProvider } from './GlobalContext'

const GlobalContainer = props => {
    // pretend we are fetching these 'things'
    const initialGlobalState = {
        products: [],
        catagories: [],
        user: {},
        isLoading: false,
        error: null
    }
    
    const [globalState, setGlobalState] = useState(initialGlobalState)
    return (
        <GlobalProvider value={[globalState, setGlobalState]}>
            {props.children}
        </GlobalProvider>
    )
}
export default GlobalContainer