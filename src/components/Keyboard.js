import Keys from "./Keys";
import { useEffect } from "react";
import enterImg from '../assets/enter.png';
import deleteImg from '../assets/delete.png';
import { useTranslation } from "react-i18next";

const Keyboard = ({ colors, onLetterPress, handleEnter, handleDelete }) => {
    const { t } = useTranslation();
    useEffect(() => {
        const listener = (event) => {
            let key = {
                symbol: event.key.toUpperCase(),
                code: event.which,
            };

            if (event.keyCode === key.code && event.keyCode > 64 && event.keyCode < 1103) {
                onLetterPress(key.symbol)
            } else if (event.code === "Backspace") {
                handleDelete()
            } else if (event.code === "Enter" || "NumpadEnter") {
                handleEnter()
            }
        };

        window.addEventListener("keydown", listener);
        return () => {
            window.removeEventListener("keydown", listener)
        };
    }, [handleEnter]);

    return (
        <div className="keyboard">
            <Keys colors={colors}
                keys={t("firstRowKeys").split("")}
                onLetterPress={onLetterPress} />
            <Keys colors={colors}
                keys={t("secondRowKeys").split("")}
                onLetterPress={onLetterPress} />
            <div className="keyboard__btns">
                <button className="keyboard__btn" type="submit" onClick={handleDelete}><img src={deleteImg} /></button>
                <Keys colors={colors}
                    keys={t("thirdRowKeys").split("")}
                    onLetterPress={onLetterPress} />
                <button className="keyboard__btn" type="submit" onClick={handleEnter}><img src={enterImg} /></button>
            </div>
        </div>
    )
};

export default Keyboard