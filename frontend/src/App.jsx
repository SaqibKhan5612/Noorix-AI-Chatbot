import { useState } from 'react'
import ChatWidget from './components/ChatWidget'
import ChatWindow from './components/ChatWindow'
import ChatInput from './components/ChatInput'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {isOpen && (
        <div>
          <ChatWindow onClose={() => setIsOpen(false)} />
          <div className="fixed bottom-6 right-6 w-[380px]">
            <ChatInput />
          </div>
        </div>
      )}

      {!isOpen && (
        <ChatWidget onClick={() => setIsOpen(true)} />
      )}
    </div>
  )
}

export default App
