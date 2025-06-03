import React, { useEffect, useState } from "react";
import { Cards } from "./Home/Cards";

import {
  vakitIsimleri,
  parseVakitSaatleri,
  findCurrentVakitIndex,
  calculateNextVakit,
} from "../helpers/vakitHelpers";

export const Home = () => {
  const [vakitler, setVakitler] = useState<string[]>([]);
  const [aktifIndex, setAktifIndex] = useState<number | null>(null);
  const [kalanSure, setKalanSure] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const now = new Date();
      const today = now.toISOString().split("T")[0];

      const tomorrowDate = new Date(now);
      tomorrowDate.setDate(now.getDate() + 1);
      const tomorrow = tomorrowDate.toISOString().split("T")[0];

      const res = await fetch(
        `https://vakit.vercel.app/api/timesFromPlace?country=Turkey&region=İstanbul&city=İstanbul&date=${today}&days=2&timezoneOffset=180&calculationMethod=Turkey`
      );
      const data = await res.json();

      const todayTimes = data.times[today];
      const tomorrowTimes = data.times[tomorrow];

      setVakitler(todayTimes);

      const vakitSaatleri = parseVakitSaatleri(todayTimes);

      const currentIndex = findCurrentVakitIndex(vakitSaatleri, now);

      setAktifIndex(currentIndex);

      const { nextName, kalanSaat, kalanDakika } = calculateNextVakit(
        currentIndex,
        vakitSaatleri,
        tomorrowTimes,
        now
      );

      setKalanSure(
        `${nextName} vaktine ${kalanSaat} saat ${kalanDakika} dakika kaldı.`
      );
    };

    fetchData();
  }, []);

  return (
    <Cards
      vakitler={vakitler}
      isimler={vakitIsimleri}
      aktifIndex={aktifIndex}
      kalanSure={kalanSure}
    />
  );
};
