import Link from "next/link";
import Image from 'next/image';
import { Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 border-gray-500">
      <div className="text-gray-500">
        Supported by{" "}
        <a
          href="https://www.linkedin.com/school/codeuniversity/"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition hover:text-gray-300 underline-offset-2"
        >
          CODE Univsersity
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
