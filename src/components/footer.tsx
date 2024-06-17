import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";

const Link = ({ children }: { children: string }) => {
  return <a className="text-zinc-300 cursor-pointer">{children}</a>;
};

export const Footer = () => {
  return (
    <div className="w-full bg-blue-900 text-white py-8 flex justify-center items-center px-1  md:px-8 flex-col">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-screen-lg px-4">
        <div className="flex flex-col gap-1">
          <div className="text-white font-bold text-lg">A Empresa</div>
          <Link>Conheça</Link>
          <Link>vendedores Online</Link>
          <Link>Blog</Link>
          <Link>Depoimentos</Link>
          <Link>Trabalhe Conosco</Link>
          <Link>Contato</Link>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-white font-bold text-lg">Site</div>
          <Link>Lista de Presentes</Link>
          <Link>Check-in Online</Link>
          <Link>Termos de Uso</Link>
          <Link>Política de Uso</Link>
          <Link>Segurança</Link>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-white font-bold text-lg">Ajuda</div>
          <Link>Perguntas Frequentes</Link>
          <Link>Documentos</Link>
          <Link>Seguro Viagem</Link>
          <Link>Cotação de Grupos</Link>
          <Link>Material de Divulgação</Link>
          <Link>Capacitur</Link>
          <Link>Campanhas</Link>
          <Link>Avalie Sua Viagem</Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-white font-bold text-lg">Cativa</div>
          <div className="flex flex-row gap-2 items-center">
            <FiPhone className="text-white text-lg min-w-[18px]" />
            <a>(51)3290-6565</a>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <MdOutlineMail className="text-white text-lg min-w-[18px]" />
            <a>cativa@email.com</a>
          </div>
          <div className="flex flex-row gap-1 items-center">
            <BsGeoAlt className="text-white text-lg min-w-[18px]" />
            <a className="max-w-[200px]">
              R. dos Andradas, 1234 - 7o andar - Centro Histórico, Porto Alegre
              - RS, 90020-008
            </a>
          </div>
        </div>
      </div>
      <div className="bg-white min-h-[1px] mt-8 w-full"></div>
      <p className="mt-8 text-sm text-center">
        © Copyright 2024 , All Rights Reserved by CATIVA OPERADORA
      </p>
    </div>
  );
};
