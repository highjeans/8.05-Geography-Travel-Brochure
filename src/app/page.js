import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center mt-10">
      <Image src="/Taiwan-Home.jpeg" alt="Taiwan" width={548} height={318}/>
      <p className="mt-3 text-center">
        Welcome to the country of Taiwan!
        <br/>
        Use the menu on the left to learn everything you need to know about Taiwan!
      </p>
    </div>
  )
}
