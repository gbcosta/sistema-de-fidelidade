import image from "@assets/lisboa.jpg";

const Field = ({
  type,
  id,
  placeholder,
  children,
}: {
  type: string;
  id: string;
  placeholder: string;
  children: string;
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <label className="text-dm font-bold text-blue-900" htmlFor={id}>
        {children}
      </label>
      <input
        className="w-full p-3 text-md rounded-md"
        type={type}
        id={id}
        placeholder={placeholder}
      ></input>
    </div>
  );
};
export const Form = () => {
  return (
    <div className="flex min-h-[600px] flex-col-reverse md:flex-row md:h-screen bg-yellow-500">
      <img
        src={image}
        className="md:h-screen object-cover md:w-4/12 mt-10 md:mt-0 md:min-h-[600px]"
      />
      <div className="w-full flex justify-center items-center flex-col p-2">
        <h1 className="text-blue-900 font-extrabold text-4xl mb-10 text-center mt-4">
          Cadatre sua Agência
        </h1>
        <form className="w-full flex justify-center">
          <div className="w-full max-w-[450px] flex flex-col gap-4">
            <Field type="text" id="nome" placeholder="Nome da Agência">
              Nome da Agência
            </Field>
            <Field type="Email" id="Email" placeholder="Email">
              Email
            </Field>
            <Field type="tel" id="Número" placeholder="(XX) XXXX-XXXX">
              Número para Contato
            </Field>
            <button className="bg-blue-900 text-white text-xl py-4 font-bold rounded-md mt-4">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
