import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
type InputControlProps = {
  name: string
  label: string
  placeholder?: string
  type?: string
}

export function InputControl({
  label,
  type,
  placeholder,
  name,
}: InputControlProps) {
  return (
    <FormField
      name={name}
      render={({ field, fieldState }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          {fieldState.invalid && <FormMessage />}
        </FormItem>
      )}
    />
  )
}
