import { ReactNode } from "react";
import { IoCalendarOutline, IoAppsSharp, IoLink } from "react-icons/io5";

import { TableTitleProps } from "@/types/TableTypes";

export const UseTableTitle = () => {
  const handleIcon = (icon: TableTitleProps["icon"]): ReactNode => {
    switch (icon) {
      case "quantity":
        return <IoLink />;
      case "date":
        return <IoCalendarOutline />;
      case "text":
        return <IoAppsSharp />;
      default:
        return <></>;
    }
  };

  return {
    handleIcon,
  };
};
