import React from "react";

type Props = {
  id: string;
  name: string;
  turma?: string;
  rm?: string;
  linkedin?: string;
  github?: string;
  avatar?: string;
  onRemove?: (id: string) => void;
};

export default function IntegranteCard({
  id,
  name,
  turma,
  rm,
  linkedin,
  github,
  avatar,
  onRemove,
}: Props) {
  return (
    <article
      className="guiahc-integrante flex flex-col items-center text-center bg-[#3f0684] rounded-[40px] border-[5px] border-black p-4"
      // unique class 'guiahc-integrante' avoids collision with legacy CSS
      aria-labelledby={`name-${id}`}
    >
      {/* imagem quadrada com cantos grandes */}
      <div className="guiahc-avatar w-[290px] h-[290px] overflow-hidden rounded-[24px] border-[5px] border-black bg-gray-800 flex items-center justify-center">
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-6xl text-white/90">{name?.charAt(0)?.toUpperCase() ?? "?"}</span>
        )}
      </div>

      <h2 id={`name-${id}`} className="mt-4 text-3xl md:text-4xl text-white font-light leading-tight">
        {name}
      </h2>

      <div className="mt-2 text-white">
        {turma && <p className="text-lg">{turma}</p>}
        {rm && <p className="text-base">RM: {rm}</p>}
      </div>

      <div className="mt-4 flex items-center gap-3">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="guiahc-icon-link inline-block bg-white p-1 rounded-md border-[5px] border-black hover:bg-[#abe3ff] transition-transform transform hover:scale-110"
            aria-label={`${name} LinkedIn`}
          >
            <img src="/img/linkedin.png" alt="linkedin" className="w-12 h-12" />
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="guiahc-icon-link inline-block bg-white p-1 rounded-md border-[1px] border-white hover:bg-[#bebebe] transition-transform transform hover:scale-110"
            aria-label={`${name} GitHub`}
          >
            <img src="/img/github.png" alt="github" className="w-12 h-12" />
          </a>
        )}
      </div>

      {onRemove && (
        <div className="mt-4">
          <button
            onClick={() => onRemove(id)}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
          >
            Remover
          </button>
        </div>
      )}
    </article>
  );
}