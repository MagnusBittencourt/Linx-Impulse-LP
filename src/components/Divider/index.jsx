import { DividerStyle } from "./style";

export function Divider({ children }) {
  return (
    <DividerStyle>
      <span className="line" />
      <p>{children}</p>
      <span className="line" />
    </DividerStyle>
  );
}
