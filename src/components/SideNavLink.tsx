import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  to: string;
  name: string;
  children: ReactNode;
  onClick: () => void;
  // any props that come into the component
}

export default function SideNavLink({
  to,
  name,
  onClick,
  children,
  ...props
}: Props) {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={(navData) => {
        return `mb-4 ${
          navData.isActive
            ? "bg-white text-primary"
            : "text-white hover:text-primary"
        }  px-2 py-1 flex text-primary hover:text-primary transition-all group-hover:transition-all`;
      }}
      {...props}
    >
      <span className="mt-1"> {children}</span>
      <span className="text-base ">{name}</span>
    </NavLink>
  );
}
