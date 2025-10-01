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
      className="guiahc-integrante w-full max-w-[340px] sm:max-w-[300px] md:max-w-[320px] flex flex-col items-center text-center bg-[#3f0684] rounded-[40px] border-[5px] border-black p-4"
      aria-labelledby={`name-${id}`}
    >
      {/* avatar responsivo: small on mobile, large on desktop */}
      <div className="guiahc-avatar overflow-hidden rounded-[24px] border-[5px] border-black bg-gray-800 flex items-center justify-center
                      w-40 h-40 sm:w-56 sm:h-56 md:w-[290px] md:h-[290px]">
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-4xl sm:text-5xl md:text-6xl text-white/90">{name?.charAt(0)?.toUpperCase() ?? "?"}</span>
        )}
      </div>

      <h2 id={`name-${id}`} className="mt-4 text-2xl sm:text-3xl md:text-4xl text-white font-light leading-tight">
        {name}
      </h2>

      <div className="mt-2 text-white">
        {turma && <p className="text-base sm:text-lg">{turma}</p>}
        {rm && <p className="text-sm sm:text-base">RM: {rm}</p>}
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
            <img src="/img/linkedin.png" alt="linkedin" className="w-8 h-8 sm:w-10 sm:h-10" />
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
            <img src="/img/github.png" alt="github" className="w-8 h-8 sm:w-10 sm:h-10" />
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
