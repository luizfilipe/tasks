import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { NotFound, TaskManager } from './src/pages'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Reset } from './src/styles/reset'
const Router = () => {
  return (
    <Provider store={store}>
      <Reset />
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <TaskManager />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

const App = document.getElementById('client')

ReactDOM.render(<Router />, App)
