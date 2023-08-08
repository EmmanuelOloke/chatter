export type ButtonComponentProps = {
  text: string;
  link: string;
  width: string;
  height: string;
  tab?: '0' | '1';
  hasIcon?: boolean;
  disabled?: boolean;
  handleClick?: (event: MouseEvent) => void;
};
