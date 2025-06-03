export const vakitIsimleri = [
  "İmsak",
  "Güneş",
  "Öğle",
  "İkindi",
  "Akşam",
  "Yatsı",
];

export const parseVakitSaatleri = (times: string[]): Date[] => {
  return times.map((timeStr) => {
    const [hour, minute] = timeStr.split(":").map(Number);
    const d = new Date();
    d.setHours(hour, minute, 0, 0);
    return d;
  });
};

/**
 * Şu anki vakitin indeksini bulur.
 * @param vakitSaatleri Bugünün vakit saatleri Date[] olarak
 * @param now Şu anki zaman Date objesi
 * @returns aktif vakit indeksi
 */
export const findCurrentVakitIndex = (
  vakitSaatleri: Date[],
  now: Date
): number => {
  for (let i = 0; i < vakitSaatleri.length; i++) {
    if (now < vakitSaatleri[i]) {
      return i - 1 >= 0 ? i - 1 : 0;
    }
  }
  return vakitSaatleri.length - 1;
};

/**
 * Sonraki vakit ve kalan süreyi hesaplar.
 * @param currentIndex Şu anki vakitin indeksi
 * @param vakitSaatleri Bugünün vakitleri
 * @param tomorrowTimes Yarının vakitleri string dizisi
 * @param now Şu anki zaman Date objesi
 * @returns { nextName: string, kalanSaat: number, kalanDakika: number }
 */
export const calculateNextVakit = (
  currentIndex: number,
  vakitSaatleri: Date[],
  tomorrowTimes: string[],
  now: Date
) => {
  let nextVakit: Date;
  let nextName: string;

  if (currentIndex === vakitSaatleri.length - 1) {
    // Yatsı vakti sonrası → yarının imsak vaktine geçiş
    const [hour, minute] = tomorrowTimes[0].split(":").map(Number);
    nextVakit = new Date(now);
    nextVakit.setDate(now.getDate() + 1);
    nextVakit.setHours(hour, minute, 0, 0);
    nextName = vakitIsimleri[0];
  } else {
    nextVakit = vakitSaatleri[currentIndex + 1];
    nextName = vakitIsimleri[currentIndex + 1];
  }

  const farkMs = nextVakit.getTime() - now.getTime();
  const kalanSaat = Math.floor(farkMs / (1000 * 60 * 60));
  const kalanDakika = Math.floor((farkMs % (1000 * 60 * 60)) / (1000 * 60));

  return { nextName, kalanSaat, kalanDakika };
};
