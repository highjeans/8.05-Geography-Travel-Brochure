export default function Header() {
  return (
    <div className="flex flex-col items-center justify-between pt-5 fixed left-0 top-0 w-full backdrop-blur-2xl z-20">
      <span className="text-[6vw] sm:text-5xl">Taiwan Travel Brochure</span>
      <span className="italic pt-1 text-[2.5vw] [line-height:1] sm:text-base">Designed and Coded by Vivan Waghela</span>
      <hr className="w-full border-solid border-2 border-[rgb(var(--forground-rgb))] mt-5"/> {/* potentially change for later */}
    </div>
  );
}