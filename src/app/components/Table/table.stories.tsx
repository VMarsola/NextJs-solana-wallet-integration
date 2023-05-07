import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import {
  within,
  userEvent,
  findByTestId,
  getAllByText,
} from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Table } from "./page";
import { TableProps } from "@/types/TableTypes";

export default {
  title: "Components/Table",
  component: Table,
} as Meta;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  titles: [
    { title: "Name", icon: "text" },
    { title: "amount", icon: "quantity" },
  ],
  content: [
    {
      amount: 1,
      title: "dGhpc0lzQU1pbnQ=",
    },
    {
      amount: 0.15,
      title: "QU1pbnQdGhpc0lz",
    },
    {
      amount: 1,
      title: "nQdGh=QU1pbpc0lz",
    },
  ],
};

Default.play = async ({ canvasElement }) => {
  // Render the component
  const canvas = within(canvasElement);
  const clickTab = await canvas.findByTestId("2");

  await userEvent.click(clickTab);
  // Expect the desired content to be in the document

  const itemFromRow2 = canvas.getByText("nQdGh=QU1pbpc0lz");
  expect(itemFromRow2).toBeTruthy();
};
