import { Suspense } from 'react'
import { UserContent, LoadingState } from './user-content'

// Force dynamic rendering to avoid prerender error with useSearchParams
export const dynamic = 'force-dynamic'

export default function UserPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <UserContent />
    </Suspense>
  )
}
