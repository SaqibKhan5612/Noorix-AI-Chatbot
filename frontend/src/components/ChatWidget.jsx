function ChatWidget({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg transition hover:bg-blue-700"
        >
            💬
        </button>
    )
}

export default ChatWidget
