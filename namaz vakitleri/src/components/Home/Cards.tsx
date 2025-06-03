import React from "react";

interface CardsProps {
  vakitler: string[];
  isimler: string[];
  aktifIndex: number | null;
  kalanSure: string;
}

export const Cards = ({
  vakitler,
  isimler,
  aktifIndex,
  kalanSure,
}: CardsProps) => {
  return (
    <div className="w-full p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {isimler.map((isim, index) => {
          const isAktif = index === aktifIndex;
          return (
            <div
              key={index}
              className={`space-y-6 rounded-2xl p-6 shadow-md transition duration-300 ${
                isAktif
                  ? "bg-orange-200 shadow-orange-400"
                  : "bg-gray-100 hover:shadow-lg"
              }`}
            >
              <div className="flex justify-end">
                <div className="h-4 w-4 rounded-full bg-gray-900"></div>
              </div>

              <div>
                <p className="text-center text-2xl font-extrabold text-gray-900 mb-2">
                  {isim}
                </p>
                <p className="text-center text-xl font-extrabold text-[#FE5401]">
                  {vakitler[index] || "--:--"}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Kalan süre mesajı */}
      <div className="text-center text-lg font-semibold text-gray-700 bg-white p-4 rounded-xl shadow-md">
        {kalanSure}
      </div>
    </div>
  );
};
