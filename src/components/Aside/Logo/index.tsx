import { useWords } from "../../../hooks/words";

const Logo = () => {
  const words = useWords(["Алейников Влад"], ["Vlad Aleynikov"]);
  return <h1 className="aside__logo">{words.next().value}</h1>;
};

export default Logo;
