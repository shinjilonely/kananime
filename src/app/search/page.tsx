import { Suspense } from 'react'
import { SearchContent, LoadingState } from './search-content'

// Force dynamic rendering to avoid prerender error with useSearchParams
export const dynamic = 'force-dynamic'

export default function SearchPage() {
  return (
    <Suspense fallback={<LoadingState />}>
      <SearchContent />
    </Suspense>
  )
}
