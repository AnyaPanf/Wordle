
export const EmptyLine = () => {
    const emptySlots = Array(5).fill()

    return (
        <div className="word__squares">
            {emptySlots.map(() => (
                <div className="word__square"></div>
            ))}
        </div>
    )
}
