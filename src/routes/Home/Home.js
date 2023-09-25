import React, { useContext, useEffect, useState } from 'react'
import Container from '../../Component/Container/Container'
import Navbar from '../../Component/Navbar/Navbar'
import Main from '../../Component/Main/Main'
import GlobalContext from '../../Component/GlobalContext/GlobalContext'
import api from '../../Utils/api'
import ErrorMessage from '../../Component/ErrorMessage/ErrorMessage'
import { stateUpdater } from '../../Utils/utils'

function Home() {

  const [globalState, setGlobalState] = useContext(GlobalContext)


  useEffect(() => {
    const newState = stateUpdater(globalState, { isLoading: true })
    setGlobalState(newState)
    //console.log('globalState, newState', globalState,newState);
    api.get('/api')
      .then(response => {
        //console.log('responseData', response.data);

        const newState = stateUpdater(response.data, { isLoading: false, error: null })
        setGlobalState(newState)




      })
      .catch(err => {
        console.log(err);

        const newState = stateUpdater(globalState, { isLoading: false, error: err.message })
        setGlobalState(newState)
      })
  }, [])

  if (globalState.error) {
    return (
      <Container>
        <Navbar />
        <ErrorMessage />
      </Container>
    )
  }


  return (
    <Container>
      <Navbar />
      <Main isLoading={globalState.isLoading} />
    </Container>
  )
}

export default Home
