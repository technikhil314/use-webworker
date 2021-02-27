import React from 'react'

import { useWorker } from 'use-comlink'
import 'use-comlink/dist/index.css'

const App = () => {
  const { isProcessing, data } = useWorker({
    url: '/worker.js',
    data: null
  })
  if (isProcessing) {
    return <h1>Loading...</h1>
  }
  return <h1>{data}</h1>
}

export default App
