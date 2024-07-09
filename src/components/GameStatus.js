import { useTranslation } from "react-i18next";

export const GameStatus = ({ status, secretWord }) => {
  const { t } = useTranslation();

  if (status === "GAME") {
    return null
  }

  if (status === "WIN") {
    return (
      <div className="result">
        <p>{t("win")}</p>
        <p>{secretWord}</p>
      </div>
    )
  }

  return (
    <div className="result">
      <p>{t("lost")}</p>
      <p>{secretWord}</p>
    </div>
  )
}
