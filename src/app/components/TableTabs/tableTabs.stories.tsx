import React from "react";
import { Meta, StoryFn } from "@storybook/react/";

import { TableTab } from "./page";
import { TableTabProps } from "../../../types/TableTypes";

export default {
  title: "Components/TableTab",
  component: TableTab,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<{ tab1: TableTabProps; tab2?: TableTabProps }> = ({
  tab1,
  tab2,
}) => (
  <>
    <TableTab {...tab1} />
    {tab2 && <TableTab {...tab2} />}
  </>
);

export const Default = Template.bind({});
Default.args = {
  tab1: { id: "1", currentPage: 1 },
};

export const DualTabs = Template.bind({});
DualTabs.args = {
  tab1: { id: "1", currentPage: 1 },
  tab2: { id: "2", currentPage: 1 },
};
