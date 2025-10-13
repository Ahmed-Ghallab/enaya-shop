import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./BigSaleBanner.css";

export default function BigSaleBanner() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const setNewEndTime = () => new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
    let endTime = setNewEndTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      let distance = endTime - now;

      if (distance <= 0) {
        endTime = setNewEndTime();
        distance = endTime - now;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-5 flex justify-center">
      <div className="BigSaleBanner relative overflow-hidden container mx-auto px-4">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent"></div>

        <div className="relative flex justify-between items-center text-white p-6 flex-wrap">
          {/* Left Side */}
          <div
            className="w-1/2 min-w-[250px] cursor-pointer text-center md:text-left"
            onClick={() => navigate("/shop")}
          >
            <h2 className="text-3xl md:text-6xl font-extrabold uppercase drop-shadow-lg">
              <span className="animate-bounce inline-block">
                {t("bigSaleBanner.big")}
              </span>
              <span className="text-red-500 animate-pulse">
                {" "}{t("bigSaleBanner.sale")}
              </span>
            </h2>
            <h3 className="text-lg md:text-4xl font-semibold my-2 drop-shadow-md">
              {t("bigSaleBanner.upTo")}{" "}
              <span className="text-red-500 font-extrabold">50%</span>{" "}
              {t("bigSaleBanner.off")}
            </h3>
          </div>

          {/* Right Side */}
          <div
            className="w-1/2 min-w-[250px] cursor-pointer text-center md:text-right mt-4 md:mt-0 "
            onClick={() => navigate("/shop")}
          >
            <div className="bg-black/70 px-2 py-1 inline-block rounded-md">
              <p className="font-mono text-sm md:text-2xl text-yellow-400 tracking-widest">
                {timeLeft.days}d : {timeLeft.hours.toString().padStart(2, "0")}h
                : {timeLeft.minutes.toString().padStart(2, "0")}m :{" "}
                {timeLeft.seconds.toString().padStart(2, "0")}s
              </p>
            </div>
            <p className="text-xs md:text-xl text-gray-200 mt-2">
              {t("bigSaleBanner.description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
