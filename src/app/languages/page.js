const metadata = {
  title: "Languages",
}

export default function Languages() {
  return (
    <div className="flex flex-col items-center w-full">
      <p className="mt-10">Below is a table of the different language spoken in Taiwan.</p>
      <table className="table-auto border-collapse mt-5 w-3/5">
        <thead>
          <tr>
            <th>Languages</th>
            <th>Percent of use at home</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Taiwanese Mandarin</td>
            <td>83.5%</td>
          </tr>
          <tr>
            <td>Taiwanese Hokkien</td>
            <td>81.9%</td>
          </tr>
          <tr>
            <td>Taiwanese Hakka</td>
            <td>6.6%</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}