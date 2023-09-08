import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <Image src="/Taiwan-Home.jpeg" alt="Taiwan" width={548} height={318}/>
      <p className="mt-3">
        Welcome to the country of Taiwan!
      </p>
    </div>
  )
}
