import {FC} from 'react'
import {Icon} from '../icons'

export const Checklist: FC<{items: string[]}> = ({items}) => {
  return (
    <ul className="text-white space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-3">
          <Icon name="check-circle" className="h-5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}