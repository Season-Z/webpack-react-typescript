import React, { useEffect, useRef } from 'react'
// @ts-ignore
import { mount } from 'dashboard/DashboardApp'

export default function DashboardApp() {
  const ref = useRef(null)
  useEffect(() => {
    mount(ref.current)
  }, [])
  return <div ref={ref}></div>
}
