import React from 'react'
import { Suspense } from 'react'
import Error from './Error.jsx';

const Home = React.lazy(() => import('./Home.jsx'));
const Abhout = React.lazy(() => import('./Abhout.jsx'));


const App = () => {
  return (
    <div>
      <Suspense fallback={<Error/>}>
        <Home />
      </Suspense>
      <Suspense fallback={<Error/>}>
        <Abhout />
      </Suspense>
    </div>
  )
}

export default App