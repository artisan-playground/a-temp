import React, { Suspense } from 'react'
import NavBar from './components/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import GlobalStyle from './components/GlobalStyle'
import Footer from './components/Footer'
import styled from 'styled-components'
// import Connection from './util/Connection'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const ContentWrap = styled.div`
  flex: 1;
`

function App() {
  return (
    <>
    {/* <Connection /> */}
    <PageContainer>
    <ContentWrap>
    <GlobalStyle />
    <Router>
      <NavBar />
      <Suspense fallback='...Loading please wait...'>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Suspense>
      </Router>
      </ContentWrap>
      <Footer />
    </PageContainer>
    </>
  )
}

export default App