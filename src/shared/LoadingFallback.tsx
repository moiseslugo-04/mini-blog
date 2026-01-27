import { Spinner } from './ui/spinner'
export function LoadingFallback({ text }: { text: string }) {
  return (
    <div className='flex gap-1 justify-center items-center m-3 '>
      <Spinner />
      <p>{text}</p>
    </div>
  )
}
