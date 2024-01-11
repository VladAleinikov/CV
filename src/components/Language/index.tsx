import { useActions } from "../../hooks/actions";
import { useAppSelector } from "../../hooks/redux";

const Language = () => {
  const { language } = useAppSelector((state) => state.language);
  const { toggleLanguage } = useActions();

  const changeLanguageHandler = () => {
    toggleLanguage();
  };
  return (
    <div className="language-change">
      <button
        className={
          "language-change__language ru-language " + (language === "ru" ? "active" : "")
        }
        disabled={language === "ru"}
        onClick={changeLanguageHandler}
      >
        RU
      </button>
      <button
        className={
          "language-change__language en-language " + (language === "en" ? "active" : "")
        }
        disabled={language === "en"}
        onClick={changeLanguageHandler}
      >
        EN
      </button>
    </div>
  );
};

export default Language;
