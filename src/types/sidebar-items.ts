type HeaderItem = {
  type: 'header';
};

type LinkItem = {
  type: 'link';
  icon?: React.JSX.Element;
  href: string;
};

type ItemTypeProps = HeaderItem | LinkItem;

export type SideBarItem = ItemTypeProps & {
  label: string;
};
