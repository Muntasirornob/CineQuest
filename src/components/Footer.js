
import { Link,NavLink } from "react-router-dom"
export const Footer = () => {
  return (
  

      

    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a to="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <Link>
                <a to="#" className="hover:underline me-4 md:me-6">About</a>
            </Link>
            <Link>
                <a to="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </Link>
            <Link>
                <a to="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </Link>
            <Link>
                <a to="#" className="hover:underline">Contact</a>
            </Link>
        </ul>
    </footer>

   
  )
}
