export const Modal = () => {
  const onClick = () => {
    document.getElementById("modal")?.classList.add("hidden");
  };

  return (
    <div
      id="modal"
      className="fixed min-h-screen w-screen z-10 top-0 left-0 transition-all hidden"
    >
      <div className="w-full h-full bg-black fixed opacity-65 transition-opacity" />
      <div
        className="transition-all px-4 py-5 bg-white text-black text-md fixed
         rounded-lg flex flex-col gap-4 items-center opacity-1 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      >
        <span>Muito obrigado por cadastrar-se.</span>
        <button
          onClick={onClick}
          className="bg-zinc-800 text-white py-1 w-full"
        >
          OK
        </button>
      </div>
    </div>
  );
};
