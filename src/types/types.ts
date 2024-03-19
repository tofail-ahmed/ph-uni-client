import { ReactNode } from "react";

export interface IRoute {
  path: string;
  element: ReactNode;
}
export interface IUserPath {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: IUserPath[];
}

    export type ISidebarItem =
      | {
          key: string;
          label: ReactNode;
          children?: ISidebarItem[];
        }
      | undefined;