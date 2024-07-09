import { useTranslation } from "react-i18next";

export const Rules = ({ handleRules, rules }) => {
    const { t } = useTranslation();

    if (rules) {
        const list = t("rules").split('/')
        console.log(list);
        return (
            <div className="rules">
                <div className="close" onClick={handleRules}>X</div>
                <ol className="rules__list">
                    {list.map((item) => {
                        return <li className="rules__item">{item}</li>
                    })}
                </ol>
            </div>
        )
    }
}
