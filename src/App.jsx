import React from 'react'
import { StoreProvider } from './store'
import Counter from './components/counter/counter'

const App = () => {
  return (
    <StoreProvider>
    <div>
      <Counter/>
    </div>
    </StoreProvider>
  )
}

export default App