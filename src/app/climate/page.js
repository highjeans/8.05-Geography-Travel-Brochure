import Image from 'next/image'

const metadata = {
  title: "Climate",
}

export default function Climate() {
  return (
    <div className="flex justify-center items-center mt-10 w-full px-16">
      <p className="w-3/5 text-lg">Different parts of Taiwan have slightly different climates. Northern Taiwan has a humid, subtropical climate, with temperatures varying between seasons. Central and a portion of south Taiwan have a tropical monsoon climate where temperatures vary from warm to hot. You can find more accurate climates on the diagram shown here.</p>
      <Image src="/Taiwan-Climate.png" alt="Taiwan's Climate Diagram" width={498} height={480} className="border"/>
    </div>
  )
}