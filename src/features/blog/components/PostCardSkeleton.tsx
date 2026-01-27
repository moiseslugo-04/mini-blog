export function PostCardSkeleton() {
  return (
    <div className=' mx-auto flex flex-col gap-3 w-[300px] rounded-xl border border-gray-300 bg-gray-200 p-5 animate-pulse'>
      <div className='w-full aspect-[3/2] relative rounded-md overflow-hidden bg-gray-300'></div>

      <div className='h-6 w-3/4 bg-gray-300 rounded-md mb-2'></div>
      <div className='flex flex-1 justify-between'>
        <div className='flex gap-2 items-center'>
          <div className='rounded-full border border-white bg-gray-300 w-8 h-8'></div>
          <div className='h-4 w-24 bg-gray-300 rounded-md'></div>
        </div>
        <div className='h-4 w-20 bg-gray-300 rounded-md'></div>
      </div>
      <div className='h-4 w-full bg-gray-300 rounded-md'></div>
    </div>
  )
}
