import { cn } from '@/utils/cn';
import React from 'react'
interface StyledParagrahProps extends React.HTMLAttributes<HTMLParagraphElement> {
    content: string
}
const StyledParagrah: React.FC<StyledParagrahProps> = ({content,className, ...props}) => {
  return (
    <p
      className={cn(
        "text-primary tracking-widest relative after:content-[''] after:absolute after:w-8 after:h-[1px] after:bg-primary after:top-1/2 after:mx-2",
       className
      )}
      {...props}
    >
      {content}
    </p>
  );
}

export default StyledParagrah