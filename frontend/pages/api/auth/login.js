import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'

const ProtectedRoute = async (req, res) => {
  // Create authenticated Supabase Client
  const supabase = createPagesServerClient({ req, res })
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session)
    return res.status(401).json({
      error: 'not_authenticated',
      description: 'The user does not have an active session or is not authenticated',
    })

  // Run queries with RLS on the server
  const { data } = await supabase.from('test').select('*')
  res.json(data)
}

export default ProtectedRoute