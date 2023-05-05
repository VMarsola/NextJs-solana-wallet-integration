import { ReactNode } from "react";
import { IoCalendarOutline, IoAppsSharp, IoLink } from "react-icons/io5";

import { TableTitleProps } from "@/types/TableTitle";

export const UseTable = () => {
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
