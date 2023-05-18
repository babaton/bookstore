import React, { InputHTMLAttributes, forwardRef } from 'react'

export default forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(function TextField({ className, ...restProps }, ref) {
    return (
        <input
        className={`${className} block w-full rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
        {...restProps}
        ref={ref}
        />
    )
})
