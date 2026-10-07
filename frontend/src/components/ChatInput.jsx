function ChatInput() {
    return (
        <div className="flex gap-2 border-t bg-white p-3">
            <input
                type="text"
                placeholder="Ask Noorix..."
                className="flex-1 rounded-lg border px-3 py-2 text-sm outline-none focus:border-blue-500"
            />

            <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                Send
            </button>
        </div>
    )
}

export default ChatInput

