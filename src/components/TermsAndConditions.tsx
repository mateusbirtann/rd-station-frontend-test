const TermsAndConditions = () => {
  return (
    <div className="flex flex-col gap-2 px-4">
      <ul className="list-disc text-gray text-xs gap-1 flex flex-col">
        <li>
          Ao criar minha conta estou de acordo com os{" "}
          <a
            href="https://legal.rdstation.com/pt-BR/rdstation-services-agreement/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-cyan"
          >
            termos de uso
          </a>{" "}
          do software e{" "}
          <a
            href="https://legal.rdstation.com/pt-BR/rdstation-services-agreement/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-cyan"
          >
            política de privacidade
          </a>
        </li>
        <li>
          Ao preencher o formulário, concordo em receber comunicações de acordo
          com meus interesses.
        </li>
        <li>
          *Você pode alterar suas permissões de comunicação a qualquer tempo.
        </li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;
