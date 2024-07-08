import Keys from "./Keys"
import { useEffect } from "react"
import enterImg from '../assets/enter.png'
import deleteImg from '../assets/delete.png'

// const firstRowKeys = "ЙЦУКЕНГШЩЗХЪ".split("")
// const secondRowKeys = "ФЫВАПРОЛДЖЭ".split("")
// const thirdRowKeys = "ЯЧСМИТЬБЮ".split("")

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
                <button className="keyboard__btn" type="submit" onClick={handleDelete}><img src={deleteImg}/></button>
                <Keys colors={colors}
                    keys={thirdRowKeys}
                    onLetterPress={onLetterPress} />
                <button className="keyboard__btn" type="submit" onClick={handleEnter}><img src={enterImg}/></button>
            </div>
        </div>
    )
}

export default Keyboard