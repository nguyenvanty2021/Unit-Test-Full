import { createContext, useState } from "react";
interface ChangeColorProps {
  color: string;
  handleChangeColor: () => void;
}
const ChangeColorContext: any = createContext<ChangeColorProps>({
  color: "",
  handleChangeColor() {},
});
function ChangeColorProvider({ children }: any) {
  const [color, setColor] = useState<string>("red");
  const handleChangeColor = () => setColor(color === "red" ? "black" : "red");
  const value = {
    color,
    handleChangeColor,
    // setColor,
  };
  return (
    <ChangeColorContext.Provider value={value}>
      {children}
    </ChangeColorContext.Provider>
  );
}
export { ChangeColorContext, ChangeColorProvider };
