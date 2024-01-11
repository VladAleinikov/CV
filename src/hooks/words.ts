import { useAppSelector } from "./redux";

export function* useWords(ruWords: string[], enWords: string[]):Iterator<string> {
      const {language} = useAppSelector(state => state.language);
      for (let i = 0; i < ruWords.length; i++) {
            yield language === "ru" ? ruWords[i] : enWords[i];
            
      }
}