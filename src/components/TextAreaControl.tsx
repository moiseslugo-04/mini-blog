import { cn } from '@/lib/utils'
import {
  FormControl,
  FormLabel,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
type TextAreaProps = {
  label: string
  placeholder: string
  name: string
  high?: number
}
export function TextAreaControl({
  label,
  placeholder,
  name,
  high,
}: TextAreaProps) {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              className={cn(
                'bg-zinc-900 border-zinc-800 resize-none w-full',
                high ? `h-${high}` : 'h-80'
              )}
              placeholder={placeholder}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
