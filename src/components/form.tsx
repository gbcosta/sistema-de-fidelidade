import { useState } from "react";
import image from "@assets/lisboa.jpg";
import { addAgencie } from "@firebaseApp/firebase.ts";
import { Field } from "@components/field.tsx";
import { Modal } from "@components/modal.tsx";

export const Form = () => {
  const [clear, setClear] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      email: { value: string };
      numero: { value: string };
      name: { value: string };
    };

    addAgencie({
      email: target.email.value,
      number: target.numero.value,
      name: target.name.value,
    }).then((data) => {
      const input = document.getElementById("numero");
      const errorMessage = document.getElementById("numberError");

      if (data == "numberError") {
        input?.classList.add("border-red-500");
        errorMessage?.classList.remove("hidden");
        errorMessage?.classList.add("flex");
        return;
      }

      if (data) {
        console.log("Erro ao processar requisição");
        return;
      }

      input?.classList.remove("border-red-500");
      errorMessage?.classList.add("hidden");
      errorMessage?.classList.remove("flex");

      setClear(true);
      document.getElementById("modal")?.classList.remove("hidden");
    });
  };

  return (
    <div
      id="register"
      className="flex min-h-[600px] flex-col-reverse md:flex-row md:h-screen bg-yellow-500"
    >
      <Modal />
      <img
        src={image}
        alt="Lisboa"
        className="md:h-screen object-cover md:w-4/12 mt-10 md:mt-0 md:min-h-[600px]"
      />
      <div className="w-full flex justify-center items-center flex-col p-2">
        <h1 className="text-blue-900 font-extrabold text-4xl mb-10 text-center mt-4">
          Cadatre sua Agência
        </h1>
        <form className="w-full flex justify-center" onSubmit={onSubmit}>
          <div
            className="w-full max-w-[450px] flex flex-col gap-4"
            id="container"
          >
            <Field
              type="text"
              id="name"
              placeholder="Nome da Agência"
              clear={clear}
              setClear={setClear}
            >
              Nome da Agência
            </Field>
            <Field
              type="Email"
              id="email"
              placeholder="Email"
              clear={clear}
              setClear={setClear}
            >
              Email
            </Field>
            <Field
              type="tel"
              id="numero"
              placeholder="(XX) XXXX-XXXX"
              errorMessage="Número Inválido"
              errorId="numberError"
              clear={clear}
              setClear={setClear}
            >
              Número para Contato
            </Field>
            <button
              className="bg-blue-900 text-white text-xl py-4 font-bold rounded-md mt-4"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
