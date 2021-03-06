import { useEffect, useState } from 'react'
interface Props {
  url: string
  data: any
}

type State = {
  isProcessing: boolean
  data: any
}

export default function useWorker({ url, data }: Props): State {
  const [state, setState] = useState<State>({
    isProcessing: true,
    data: null
  })
  useEffect(() => {
    let worker: Worker
    worker = new Worker(url)
    worker.postMessage('message', data)
    worker.onmessage = (e) => {
      setState({
        isProcessing: false,
        data: e.data
      })
    }
    return () => {
      worker.terminate()
    }
  }, [])
  return state
}
