import type { Meta, StoryObj } from "@storybook/react";

import { TableTitle } from "./page";

export default {
  title: "TableTitle",
  component: TableTitle,
  decorators: [
    (story) => {
      return (
        <div className="bg-white py-4 px-6 rounded ">
          <table className="w-full text-left border-b-2-collapse">
            <thead>
              <tr className="text-sm font-semibold text-black">{story()}</tr>
            </thead>
          </table>
        </div>
      );
    },
  ],
} as Meta;

export const Default: StoryObj = {};
