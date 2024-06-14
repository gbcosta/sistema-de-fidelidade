import { ReactElement } from "react";
import { FaCreditCard } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";

const SideMenuButton = ({
  pinName,
  children,
  active = false,
}: {
  pinName: string;
  children: ReactElement;
  active?: boolean;
}) => {
  return (
    <a
      href="#"
      className="group text-lg relative flex justify-center rounded px-2 py-1.5 text-blue-700"
      style={{
        backgroundColor: active ? "#eff6ff" : "",
      }}
    >
      {children}
      <span
        className="invisible absolute start-full top-1/2 ms-4
         -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5
         text-xs font-medium text-white group-hover:visible"
      >
        {pinName}
      </span>
    </a>
  );
};
export const SideMenu = () => {
  return (
    <div className="flex h-screen w-16 flex-col justify-between border-e bg-white sticky top-0">
      <div className="px-2">
        <ul className="pt-4 flex flex-col gap-2">
          <li>
            <SideMenuButton active pinName="Fidelidade">
              <FaCreditCard />
            </SideMenuButton>
          </li>
          <li>
            <SideMenuButton pinName="Configurações">
              <IoSettingsOutline />
            </SideMenuButton>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <form action="#">
          <button type="submit">
            <SideMenuButton pinName="Sair">
              <FiLogOut />
            </SideMenuButton>
          </button>
        </form>
      </div>
    </div>
  );
};
