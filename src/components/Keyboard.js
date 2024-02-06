import Keys from "./Keys"
import { useEffect } from "react"

const firstRowKeys = "QWERTYUIOP".split("")
const secondRowKeys = "ASDFGHJKL".split("")
const thirdRowKeys = "ZXCVBNM".split("")

const Keyboard = ({ colors, onLetterPress, handleEnter, handleDelete }) => {
    useEffect(() => {
        const listener = (event) => {
            let key = event.key.toUpperCase()
            if (event.code === `Key${key}`) {
                onLetterPress(key)
            } else if (event.code === "Backspace") {
                handleDelete()
            } else if (event.code === "Enter" || "NumpadEnter") {
                handleEnter()
            }
        }

        window.addEventListener("keydown", listener);
        return () => {
            window.removeEventListener("keydown", listener)
        };
    }, [handleEnter])

    return (
        <div className="keyboard">
            <Keys colors={colors}
                keys={firstRowKeys}
                onLetterPress={onLetterPress} />
            <Keys colors={colors}
                keys={secondRowKeys}
                onLetterPress={onLetterPress} />
            <div className="keyboard__btns">
                <button className="keyboard__btn" type="submit" onClick={handleDelete}>Delete</button>
                <Keys colors={colors}
                    keys={thirdRowKeys}
                    onLetterPress={onLetterPress} />
                <button className="keyboard__btn" type="submit" onClick={handleEnter}>Enter</button>
            </div>
        </div>
    )
}

export default Keyboard