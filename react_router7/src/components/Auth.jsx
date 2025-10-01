import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Auth() {
  const navigate = useNavigate()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const initialMode = params.get('mode') === 'signup' ? 'signup' : 'login'

  const [mode, setMode] = useState(initialMode)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const p = new URLSearchParams(location.search)
    setMode(p.get('mode') === 'signup' ? 'signup' : 'login')
  }, [location.search])

  function onSubmit(e) {
    e.preventDefault()
    // very small demo: create a fake user id and navigate to user page
    const id = Math.floor(Math.random() * 10000) + 1
    // in signup we might store name/email; here we just navigate
    navigate(`/user/${id}`, { state: { name, email } })
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">{mode === 'signup' ? 'Create an account' : 'Login'}</h2>

        <div className="mb-4">
          <button
            className={`px-3 py-1 mr-2 rounded ${mode === 'login' ? 'bg-orange-700 text-white' : 'bg-gray-100'}`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            className={`px-3 py-1 rounded ${mode === 'signup' ? 'bg-orange-700 text-white' : 'bg-gray-100'}`}
            onClick={() => setMode('signup')}
          >
            Signup
          </button>
        </div>

        <form onSubmit={onSubmit}>
          {mode === 'signup' && (
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Full name</label>
              <input
                className="w-full border px-3 py-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                required={mode === 'signup'}
              />
            </div>
          )}

          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              className="w-full border px-3 py-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-orange-700 text-white px-4 py-2 rounded">
              {mode === 'signup' ? 'Create account' : 'Sign in'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
