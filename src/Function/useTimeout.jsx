import { useEffect, useState } from 'react'

export const useTimeout = (dealy) => {
    const [ready, setready] = useState(false)

    useEffect(() => {
      let timer = setTimeout(() => {
        setready(true)
      }, dealy);
      return ()=>{
        clearTimeout(timer)
      }
    }, [dealy])
    
  return ready;
}
