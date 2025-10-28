export default function LoadingPost() {
  return (
    <article className='w-full max-w-3xl flex flex-col py-5 px-5 gap-4 animate-pulse'>
      <div className='w-full h-64 bg-gray-300 rounded-lg' />
      <div className='h-6 bg-gray-300 rounded w-3/4' />
      <div className='h-4 bg-gray-300 rounded w-1/2' />
      <div className='h-40 bg-gray-200 rounded' />
    </article>
  )
}
