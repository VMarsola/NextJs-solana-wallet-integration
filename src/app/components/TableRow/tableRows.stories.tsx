import { TableRowProps } from "@/types/TableTypes";
import { Meta, StoryFn } from "@storybook/react";

import { TableRow } from ".";

export default {
  title: "Components/TableRow",
  component: TableRow,
} as Meta;

const Template: StoryFn<TableRowProps> = (args) => <TableRow {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  amount: 2,
  title: "dGhpc0lzQU1pbnQ=",
};
