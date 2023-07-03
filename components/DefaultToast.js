'use client';

import { Toast } from 'flowbite-react';
import { FaCheck } from 'react-icons/fa';


export default function DefaultToast() {
  return (
    <Toast>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-500 dark:bg-cyan-800 dark:text-cyan-200">
        <FaCheck className="h-5 w-5" />
        
        
      </div>
      <div className="ml-3 text-sm font-normal">
        Set yourself free.
      </div>
      <Toast.Toggle />
    </Toast>
  )
}


