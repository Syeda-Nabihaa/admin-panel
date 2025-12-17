import React from 'react'
import { useLocation } from 'react-router-dom'

export default function VerifyToken() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const token = queryParams.get("token")

  console.log(token)

  return (
    <div>
      <h1>Verify Token</h1>
      <p>Token: {token}</p>
    </div>
  )
}
