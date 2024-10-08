import { Link } from "react-router-dom";
import { MENU } from "../../utils";
import clsx from "clsx";
interface SideBarProps {
  openSideBar: boolean;
  openSupport: () => void;
}
export default function SideBar({ openSideBar, openSupport }: SideBarProps) {
  return (
    <div
      className={clsx(
        "w-0 overflow-hidden sticky h-[calc(100vh-80px)] overflow-y-auto border-r-2 border-zinc-100 transition-all duration-500 ease-out",
        openSideBar && "md:w-60",
        !openSideBar && "md:w-20"
      )}
    >
      <ul className="flex flex-col w-full gap-2 ">
        {MENU.map((item) => {
          return (
            <Link className="" key={item.name} to={item.link}>
              <li
                onClick={item.name === "Suporte" ? openSupport : () => null}
                className="flex gap-4 px-6 py-4 rounded-sm hover:bg-zinc-100 text-zinc-800 text-nowrap"
              >
                <span>{item.icon} </span>
                <span className={`${!openSideBar && "w-0 overflow-hidden"}`}>
                  {item.name}
                </span>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
