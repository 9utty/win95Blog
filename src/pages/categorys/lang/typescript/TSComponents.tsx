import TSPost from "@/datas/TSPost";
import TypeScript1 from "./TypeScript1";

interface Components {
  Component: React.FunctionComponent;
}

const TSCom = () => {
  const TypeScriptComponents = [...TSComponents].reverse();

  return (
    <>
      {TypeScriptComponents.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

const TSComponents: Components[] = [
  {
    Component: () => {
      return (
        <TypeScript1
          Header={TSPost[0].Header}
          Date={TSPost[0].Date}
          Tag={TSPost[0].Tag}
        />
      );
    },
  },
];

export default TSCom;
