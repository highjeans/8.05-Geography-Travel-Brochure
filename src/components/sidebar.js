const pages = [
  "Home",
  "Location",
  "Geography",
  "Major Places",
  "Historic Sites/Landmarks",
  "Outdoor Activities",
  "Entertainment",
  "Climate",
  "Transportation",
  "Culture",
  "languages",
  "Food"
]

export default function Sidebar() {
  return (
    <>
      <input type="checkbox" className="hidden" id="menu"/>
      <div className="w-full lg:w-1/4 h-full flex select-none fixed left-0 top-0 z-30 lg:z-10 lg:pt-[7.5rem] [transform:translate(-95%)] duration-500 bg-[rgb(var(--background-rgb))]" id="sidebar">
        <nav className="w-[95%] h-full py-4 px-[4.166666666666667%]">
          <ol className="flex flex-col items-center">
            <li className="w-full h-12 flex justify-center items-center rounded-2xl border-[rgb(var(--foreground-rgb),0.1)] hover:border-none border-2 hover:bg-[rgb(var(--foreground-rgb),0.1)] cursor-pointer transition-[background-color,border] duration-300 ease-in-out active:bg-[rgb(var(--foreground-rgb),0.2)]">Location</li>
          </ol>
        </nav>
        <label htmlFor="menu" className="min-w-fit w-[5%] h-full flex flex-col justify-center items-center bg-gray-300 rotate-0"><span>⇥</span></label>
      </div>
    </>
  )
}