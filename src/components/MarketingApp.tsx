import React, { useEffect, useRef } from 'react'
import { useHistory } from 'react-router-dom'
// @ts-ignore
import { mount } from 'marketing/MarketingApp'

export default function MarketingApp() {
  const ref = useRef(null)
  const history = useHistory()
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavgate({ pathname: nextPathname }: any) {
        const pathname = history.location.pathname
        if (nextPathname !== pathname) {
          history.push(nextPathname)
        }
      },
    })

    if (onParentNavigate) history.listen(onParentNavigate)
  }, [])
  return <div ref={ref}></div>
}
