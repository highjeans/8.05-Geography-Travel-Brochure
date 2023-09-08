import Image from 'next/image'

export const metadata = {
  title: "Location",
}

export default function Location() {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <Image alt="Taiwan Location" src="/Taiwan-Location.jpeg" width={500} height={478.75}/>
      <p className="mt-3">
        Taiwan is location just south and east of China, near Hong Kong.
      </p>
    </div>
  )
}
