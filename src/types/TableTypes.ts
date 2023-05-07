export type TableTitleProps = {
  icon?: "text" | "date" | "quantity";
  title: string;
};

export type TableTabProps = {
  id: string;
  currentPage: number;
};

export type TableRowProps = {
  title: string;
  amount: number;
};

export type TableTitleList = {
  titles: TableTitleProps[];
};

export type TableProps = {
  titles: TableTitleProps[];
  content: TableRowProps[];
};
