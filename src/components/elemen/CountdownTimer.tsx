import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const CountdownTimer = ({ deadline = new Date().toString() }) => {
  const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = useState(parsedDeadline - Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className="w-full flex flex-row justify-center items-center flex-wrap  ">
      {Object.entries({
        Hari: time / DAY,
        Jam: (time / HOUR) % 24,
        Menit: (time / MINUTE) % 60,
        Detik: (time / SECOND) % 60,
      }).map(([label, value]) => (
        <div className="bg-blue-800 rounded-full md:px-14 md:py-12 px-7 py-5 mx-2 mb-10 animate__animated animate__pulse animate__infinite">
          <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
          <span className="font-merriweather md:text-2xl text-base font-bold">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
