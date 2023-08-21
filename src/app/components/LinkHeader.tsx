import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

interface LinkHeader extends LinkProps {
  children: ReactNode
  isActive: boolean
}

const LinkHeader = ({ ...props }: LinkHeader) => {
  return (
    <Link
      {...props}
      className={`py-2 ${
        props.isActive && 'border-green-600 border-b-2'
      }  hover:border-solid hover:border-green-600 hover:border-b-2`}
    >
      {props.children}
    </Link>
  )
}

export default LinkHeader
