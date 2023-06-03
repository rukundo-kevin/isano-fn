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
    <li
      className="mb-4  text-white hover:text-primary transition-all group-hover:transition-all"
      {...props}
    >
      <NavLink
        onClick={onClick}
        to={to}
        className={(navData) => {
          if (navData.isActive) {
            return "flex flex-row font-bold text-primary dark:text-primary";
          }
          return "flex flex-row dark:text-dark-text-fill";
        }}
      >
        {children}
        <span className="text-base ">{name}</span>
      </NavLink>
    </li>
  );
}
