import {
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form'
import { Textarea } from '@/shared/ui/textarea'
type TextAreaProps = {
  label: string
  placeholder: string
  name: string
  cols?: number
  rows?: number
}
export function TextAreaControl({
  label,
  placeholder,
  name,
  cols = 10,
  rows = 12,
}: TextAreaProps) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              cols={cols}
              rows={1}
              {...field}
              className='h-80 bg-zinc-900 border-zinc-800 resize-none'
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
