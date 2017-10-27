import React from 'react'
import {BrowserRouter, HashRouter, Route} from 'react-router-dom'

import Layout  from './containers/layout'
import Content  from './containers/content'

export default  () => {
  return (
    <Layout>
      <Route exact path="/" component={Content}/>
    </Layout>
  )
}


