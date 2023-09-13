const metadata = {
  title: "Historic Sites and Landmarks",
}

export default function HistoricSites() {
  return (
    <div className="mt-10 w-full px-10 flex flex-col items-center">
      <p>Below is a list of a few Historic Sites and Landmarks in Taiwan:</p>
      <br/>
      <ul className="list-disc list-inside w-fit text-left">
        <li>Longshan Temple</li>
        <li>Chimei Museum</li>
        <li>National Taichung Theater</li>
        <li>Fort Zeelandia</li>
        <li>Taipei Confucius Temple</li>
      </ul>
    </div>
  )
}