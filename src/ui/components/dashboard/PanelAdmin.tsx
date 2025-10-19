import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@components/shadcn/card'
import { TablePost } from '@/ui/components/dashboard/TablePost'
import { Search } from '@components/dashboard/Search'

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
        <TablePost />
      </CardContent>
    </Card>
  )
}
