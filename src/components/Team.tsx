import type { FC } from "react";
import { useState, useEffect } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  data: any[];
  pics: any[];
};

const db = <T extends (...args: any[]) => void>(fn: T, ms: number) => {
  let timer: any;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, args);
    }, ms);
  };
};

const Team: FC<Props> = ({ data, pics }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    const debouncedHandleResize = db(handleResize, 200);
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-6xl px-4 flex flex-col md:mt-10 mb-5">
        <h3 className="text-3xl font-semibold mb-10">Our team</h3>
        <div className="max-w-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            navigation
            modules={[Navigation]}
          >
            {pics.map((e, i: number) => (
              <SwiperSlide key={e.img.toLowerCase().replace(/\s+/g, "") + i}>
                <div className="max-w-full">
                  <img
                    src={e.img}
                    className="object-cover border-b-4 border-[#F6A728]"
                  />
                  <p className="mt-3 text-gray-500 text-sm">{e.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* <div className="border-b-4 border-[#F6A728]">
          <img src="/images/kc7.png" />
        </div>
        <p className="mt-3 text-gray-500 text-sm">Equipo DATALITICA, 2022.</p> */}
        <div className="mt-10">
          <Swiper
            key={`team-${windowWidth}`}
            navigation
            modules={[Navigation]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                width: 768,
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
          >
            {data.map((t: any, i: number) => (
              <SwiperSlide key={t.name.toLowerCase().replace(/\s+/g, "") + i}>
                <div className="py-10">
                  <img src={t.img} width="100%" />
                  <div className="py-4 px-2 shadow-lg md:shadow-none rounded-md">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">{t.name}</h4>
                      <div className="flex">
                        {/* <a href={t.facebook} target="_blank">
                          <img src="/images/cc8.png" className="mr-2" />
                        </a>
                        <a href={t.twitter} target="_blank">
                          <img src="/images/cs1.png" className="mr-2" />
                        </a> */}
                        <a href={t.linkedin} target="_blank">
                          <img src="/images/do9.png" />
                        </a>
                      </div>
                    </div>
                    <p className="text-sm text-[#0C6480]">{t.job}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
