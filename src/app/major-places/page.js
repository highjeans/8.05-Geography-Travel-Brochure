const metadata = {
  title: "Major Places",
}

export default function MajorPlaces() {
  return (
    <div className="mt-10 w-full px-10 flex flex-col items-center">
      <p>Below is a list of major cities in Taiwan:</p>
      <br/>
      <ul className="list-disc list-inside w-fit text-left">
        <li>Taipei</li>
        <li>Kaohsiung</li>
        <li>Taichung</li>
        <li>Tainan</li>
        <li>New Taipei</li>
      </ul>
    </div>
  )
}