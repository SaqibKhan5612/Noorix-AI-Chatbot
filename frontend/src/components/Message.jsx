function Message({ message, sender }) {
    return (
        <div
            className={`mb-3 flex ${sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
        >
            <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-800 shadow-sm'
                    }`}
            >
                {message}
            </div>
        </div>
    )
}

export default Message

