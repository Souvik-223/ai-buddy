import { log } from "console";
import { useEffect, useState } from "react"
import "~style.css"
import { useChat } from 'ai/react';

function IndexPopup() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({ api: "http://localhost:3000/api/chat" });

  return (
    <div className="plasmo-bg-gradient-to-br plasmo-from-indigo-500 plasmo-via-purple-500 plasmo-to-pink-500 plasmo-h-96 plasmo-w-96 plasmo-py-3 plasmo-px-5">
      <div className="plasmo-h-80 plasmo-bg-slate-200 plasmo-rounded-2xl plasmo-mx-auto plasmo-p-3 plasmo-font-medium plasmo-overflow-y-auto">
        <span className="plasmo-mx-24 plasmo-font-bold">✨Ask me Anything</span>
        {messages.map((m) => {
          if (m.role !== "user") {
            return (
              <div key={m.id} className="plasmo-py-0.5">
                AI: {m.content}
              </div>
            )

          }
        })}
      </div>
      <form onSubmit={handleSubmit} className="plasmo-flex plasmo-gap-x-2 plasmo-mt-3 ">
        <input placeholder="Input Your Prompt" className="plasmo-rounded-full plasmo-w-3/4 plasmo-h-7 plasmo-px-2" value={input} onChange={handleInputChange} />
        <button className="plasmo-w-1/4 plasmo-text-center plasmo-font-bold plasmo-bg-gradient-to-r plasmo-from-cyan-500 plasmo-to-blue-700 plasmo-rounded-xl plasmo-text-white hover:plasmo-from-cyan-400 hover:plasmo-to-blue-500" type="submit">Generate</button>
      </form>
    </div>
  )
}

export default IndexPopup
