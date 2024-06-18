import image from "@assets/tahiti.jpg";

export const HeroSection = () => {
  return (
    <div className="flex md:h-screen w-full bg-blue-900 text-white md:flex-row flex-col min-h-[600px]">
      <div className="flex w-full md:w-8/12 p-4 md:p-8 flex-col">
        <nav className="">
          <h1 className="text-4xl font-bold">
            <span className="text-yellow-500">Cativa</span> Operadora
            <span className="text-yellow-500">.</span>
          </h1>
        </nav>
        <header className="flex flex-col h-full justify-center gap-10 container">
          <div className="w-full">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10">
              Pacotes de Viagem Personalizados para Todos os Destinos
            </p>
            <div className="w-20 h-2 bg-yellow-500 my-4" />
            <p className="text-xl mb-10">
              O sistema de fidelidade da Cativa Operadora é um programa
              exclusivo criado para recompensar os nossos clientes frequentes.
              Cada vez que você viaja conosco, acumula pontos que podem ser
              trocados por descontos, upgrades e benefícios exclusivos em
              futuras viagens. Cadastre sua agência
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("register")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="p-3 bg-yellow-500 text-2xl rounded-md text-white font-bold shadow"
            >
              Cadastre-se
            </button>
          </div>
        </header>
      </div>
      <img
        src={image}
        alt="tahiti"
        className="md:h-screen object-cover md:w-4/12 mt-10 md:mt-0 md:min-h-[600px]"
      />
    </div>
  );
};
