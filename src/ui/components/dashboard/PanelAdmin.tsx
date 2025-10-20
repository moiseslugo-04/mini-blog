import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/shadcn/card'
import { TablePost } from '@/ui/components/dashboard/TablePost'
import { Search } from '@components/dashboard/Search'
import { Suspense } from 'react'
import { Spinner } from '../shadcn/spinner'

export function PanelAdmin() {
  return (
    <Card className='mx-auto overflow-hidden max-w-[800px] w-full'>
      <CardHeader>
        <CardTitle>My Posts</CardTitle>
      </CardHeader>

      <CardContent className='overflow-x-auto'>
        {/* Search input */}
        <Search />
        {/* Table */}
        <Suspense
          fallback={
            <p className='flex gap-2 m-auto'>
              Loading Posts <Spinner />
            </p>
          }
        >
          <TablePost />
        </Suspense>
      </CardContent>
    </Card>
  )
}
