import { ReactNode } from "react";

interface IRoute {
  path: string;
  element: ReactNode;
}
interface IUserPath {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: IUserPath[];
}
export const routeGenerator = (items: IUserPath[]) => {
  const routes = items.reduce((acc: IRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }
    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;
};
