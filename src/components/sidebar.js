"use client"
import { usePathname } from 'next/navigation'
import styles from '@styles/sidebar.module.css'
import Link from 'next/link'

const pages = [
  { title: 'Home', href: "/" },
  { title: 'Location', href: "/location" },
  { title: 'Geography', href: "/geography" },
  { title: 'Major Places', href: "/major-places" },
  { title: 'Historic Sites/Landmarks', href: "/historic-sites" },
  { title: 'Outdoor Activities', href: "/activities" },
  { title: 'Entertainment', href: "/entertainment" },
  { title: 'Climate', href: "/climate" },
  { title: 'Transportation', href: "/transportation" },
  { title: 'Culture', href: "/culture" },
  { title: 'Languages', href: "/languages" },
  { title: 'Food', href: "/food" },
]

export default function Sidebar() {
  const currentPage = usePathname();
  return (
    <>
      <input type="checkbox" className="hidden" id="menu"/>
      <div className="w-full lg:w-1/4 h-full flex select-none fixed left-0 top-0 z-30 lg:z-10 lg:pt-[7.5rem] [transform:translate(-95%)] duration-500 bg-[rgb(var(--background-rgb))]" id="sidebar">
        <nav className="w-[95%] h-full py-4 px-[4.166666666666667%]">
          <ol className="flex flex-col items-center justify-around h-full">
            {pages.map(({title, href}, ) => {
              const active = currentPage === href;

              return (
                <Link
                  className={(active ? styles.currentPage + " " : "") + "w-full"}
                  href={href}
                  key={title}
                >
                  <li className="w-full h-12 flex justify-center items-center rounded-2xl border-[rgb(var(--foreground-rgb),0.1)] hover:border-none border-2 hover:bg-[rgb(var(--foreground-rgb),0.1)] active:bg-[rgb(var(--foreground-rgb),0.2)] cursor-pointer transition-[background-color,border] duration-300 ease-in-out">{title}</li>
                </Link>
              );
            })}
          </ol>
        </nav>
        <label htmlFor="menu" className="min-w-fit w-[5%] h-full flex flex-col justify-center items-center bg-gray-300 dark:bg-gray-800 rotate-0"><span>⇥</span></label>
      </div>
    </>
  )
}