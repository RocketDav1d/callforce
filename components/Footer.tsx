import Link from "next/link";
import Image from 'next/image';
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500">
        Powered by{" "}
        <a
          href="https://replicate.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          Replicate,{" "}
        </a>
        <a
          href="https://www.bytescale.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline hover:text-gray-300 transition underline-offset-2"
        >
          Bytescale,{" "}
        </a>
        and{" "}
        <a
          href="https://vercel.com/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          Vercel.
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
        <Link
          href="https://www.linkedin.com/in/david-korn-code/"
          className="group"
          aria-label="TaxPal on GitHub"
        >
        <Linkedin color="#ffffff" />
        </Link>
        
      </div>
    </footer>
  );
}