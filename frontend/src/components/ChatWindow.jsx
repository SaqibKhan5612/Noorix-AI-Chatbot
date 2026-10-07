
function ChatWindow({ onClose }) {
    return (
        <div className="fixed bottom-24 right-6 flex h-[550px] w-[380px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="flex items-center justify-between bg-blue-600 px-5 py-4 text-white">
                <div>
                    <h2 className="font-semibold">Noorix AI Assistant</h2>
                    <p className="text-xs opacity-80">How can I help you?</p>
                </div>

                <button
                    onClick={onClose}
                    className="text-xl hover:opacity-80"
                >
                    ×
                </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
                <p className="text-sm text-gray-600">
                    Hello! 👋 How can I help you with Noorix or AOU?
                </p>
            </div>
        </div>
    )
}

export default ChatWindow
