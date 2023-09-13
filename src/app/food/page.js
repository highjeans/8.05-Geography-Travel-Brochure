const metadata = {
  title: "Food",
}

export default function Food() {
  return (
    <div className="mt-10 w-full px-10 flex flex-col items-center">
      <p>Taiwan has a lot of famous food, all listed below:</p>
      <br/>
      <ul className="list-disc list-inside w-fit text-left">
        <li>Beef Noodle Soup</li>
        <li>Marinated Pork Rice</li>
        <li>Bubble Tea (Boba)</li>
        <li>Gua Bao</li>
        <li>Xiao Long Bao</li>
        <li>And many more!</li>
      </ul>
    </div>
  )
}