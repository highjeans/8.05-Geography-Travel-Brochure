import Image from 'next/image'

const metadata = {
  title: "Geography",
}

export default function Geography() {
  return (
    <div className="flex items-center justify-center mt-0.5 px-5 p-10">
      <p className="p-5">Taiwan has many mountains in the east, with slight sloping plains in the west.<br/>The diagram shows the terrain of Taiwan.</p>
      <Image src="/Taiwan-Geography.jpeg" alt="Terrain of Taiwan" width={494} height={701}/>
    </div>
  )
}