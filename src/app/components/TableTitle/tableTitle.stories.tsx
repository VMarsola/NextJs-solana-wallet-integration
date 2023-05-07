import React from "react";
import { Meta, StoryFn } from "@storybook/react/";

import { TableTitle } from "./page";
import { TableTitleProps } from "../../../types/TableTypes";
import { TABLE_TITLES } from "../../../constants/table";

export default {
  title: "Components/TableTitle",
  component: TableTitle,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<{ tab1: TableTitleProps; tab2?: TableTitleProps }> = ({
  tab1,
  tab2,
}) => {
  let params = [tab1];

  tab2 && params.push(tab2);

  return (
    <>
      <TableTitle titles={params} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  tab1: TABLE_TITLES[0],
};

export const DualTitle = Template.bind({});
DualTitle.args = {
  tab1: TABLE_TITLES[0],
  tab2: TABLE_TITLES[1],
};
