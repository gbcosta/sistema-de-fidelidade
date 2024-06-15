import { ReactElement } from "react";
import { FaCreditCard } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const SideMenuButton = ({
  pin,
  children,
  active = false,
}: {
  pin: string;
  children: ReactElement;
  active?: boolean;
}) => {
  return (
    <a
      href="#"
      className="text-white bg-zinc-600 group text-lg relative flex justify-center rounded px-2 py-1.5 hover:bg-zinc-500"
      style={{
        backgroundColor: active ? "#eff6ff" : "",
        color: active ? "black" : "white",
      }}
    >
      {children}
      <span
        className="invisible absolute start-full top-1/2 ms-4
         -translate-y-1/2 rounded bg-gray-900 px-4 py-1.5
         text-xs font-medium text-white group-hover:visible"
      >
        {pin}
      </span>
    </a>
  );
};
export const SideMenu = () => {
  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e-2 bg-zinc-600 sticky top-0">
      <div className="px-2">
        <ul className="pt-4 flex flex-col gap-2">
          <li>
            <SideMenuButton active pin="Programa de Fidelidade">
              <FaCreditCard />
            </SideMenuButton>
          </li>
          <li>
            <SideMenuButton pin="Configurações">
              <IoSettingsOutline />
            </SideMenuButton>
          </li>
        </ul>
      </div>

      <div className=" border-t border-zinc-500 p-2">
        <form action="#">
          <button type="submit">
            <SideMenuButton pin="Sair">
              <FiLogOut />
            </SideMenuButton>
          </button>
        </form>
      </div>
    </div>
  );
};
