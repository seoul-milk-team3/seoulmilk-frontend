import CheckDone from "./CheckDone";

export default {
  title: "Components/CheckDone",
  component: CheckDone,
};

export const primary = () => <CheckDone isNormal={true} onClose={() => {}} />;
export const secondary = () => <CheckDone isNormal={false} onClose={() => {}} />;

