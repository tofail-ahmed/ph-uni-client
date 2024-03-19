import { NavLink } from "react-router-dom";
import { ISidebarItem, IUserPath } from "../types/types";

export const sidebarItemsGenerator=(items:IUserPath[],role:string)=>{
       const sidebarItems = items.reduce((acc:ISidebarItem[], item) => {
            if (item.path && item.name) {
              acc.push({
                key: item.name,
                label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
              });
            }
            if (item.children) {
              acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map((child) => {
                  if(child.name){

                    return{
                      key: child.name,
                      label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
                    }
                    }}),
              });
            }
            return acc;
          }, []);
          return sidebarItems;
}