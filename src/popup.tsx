import { log } from "console";
import { useEffect, useState } from "react"
import "~style.css"

function IndexPopup() {
  const [Search, setSearch] = useState('');
  const [data, setdata] = useState('');

  return (
    <div className="plasmo-bg-gradient-to-br plasmo-from-indigo-500 plasmo-via-purple-500 plasmo-to-pink-500 plasmo-h-96 plasmo-w-96 plasmo-py-3 plasmo-px-5">
      <div className="plasmo-flex plasmo-justify-center plasmo-h-80 plasmo-object-contain plasmo-bg-slate-200 plasmo-rounded-2xl plasmo-mx-auto plasmo-p-3 plasmo-font-medium">
        ✨Ask me Anything
      </div>
      <div className="plasmo-flex plasmo-gap-x-2 plasmo-mt-3 ">
        <input placeholder="Input Your Prompt" className="plasmo-rounded-full plasmo-w-3/4 plasmo-h-7 plasmo-px-2" value={Search} onChange={ev => setSearch(ev.target.value)} />
        <button className="plasmo-w-1/4 plasmo-text-center plasmo-font-bold plasmo-bg-gradient-to-r plasmo-from-cyan-500 plasmo-to-blue-700 plasmo-rounded-xl plasmo-text-white hover:plasmo-from-cyan-400 hover:plasmo-to-blue-500">Generate</button>
      </div>
    </div>
  )
}

export default IndexPopup
