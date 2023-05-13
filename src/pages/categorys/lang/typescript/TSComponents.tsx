import TSPost from "@/datas/TSPost";
import TypeScript1 from "./TypeScript1";

interface Component {
  Component: React.FunctionComponent;
}

interface Props {
  index?: number;
}

const TSCom = (props: Props) => {
  const TypeScriptComponents = props.index
    ? [TSComponents[props.index]]
    : TSComponents.reverse();

  return (
    <>
      {TypeScriptComponents.map(({ Component }, index) => {
        return <Component key={index} />;
      })}
    </>
  );
};

const TSComponents: Component[] = [
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
