import TSPost from "@/datas/TSPost";
import TypeScript1 from "./TypeScript1";
import PostButton from "@/pages/Components/PostButton";

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
        <PostButton
          Header={TSPost[0].Header}
          Date={TSPost[0].Date}
          Tag={TSPost[0].Tag}
          filePath="/Categorys/Lang/TypeScript/TypeScript1"
        />
      );
    },
  },
];

export default TSCom;
