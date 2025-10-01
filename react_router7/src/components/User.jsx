import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

export default function User() {
  const { id } = useParams()
  const location = useLocation()
  const state = location.state || {}

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-2xl p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-2">User profile</h1>
        <p className="text-sm text-gray-600 mb-4">User ID: <span className="font-mono">{id}</span></p>

        {state.name && (
          <p className="mb-2">Name: <strong>{state.name}</strong></p>
        )}
        {state.email && (
          <p className="mb-4">Email: <strong>{state.email}</strong></p>
        )}

        <div className="mt-4">
          <Link to="/" className="text-orange-700 hover:underline">Back to home</Link>
        </div>
      </div>
    </div>
  )
}
