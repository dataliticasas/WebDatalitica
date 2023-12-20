import type { FC } from "react";
import type { Testimonial } from "../interfaces/testimonial-interface";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  data: Testimonial[];
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

const Testimonials: FC<Props> = ({ data }) => {
  const [i, setI] = useState<number>(0);
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
    <section className="flex justify-center py-10">
      <div className="w-full max-w-6xl px-4">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-semibold">Testimonials</h3>
          <div className="flex">
            <button
              className={`${
                i === 0
                  ? "swiper-button-prev-custom rounded-xl bg-secondary text-primary py-2 px-4 mr-2"
                  : "swiper-button-next-custom rounded-xl bg-primary text-secondary py-2 px-4 mr-2"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className={`${
                i === 1
                  ? "swiper-button-prev-custom rounded-xl bg-secondary text-primary py-2 px-4 mr-2"
                  : "swiper-button-next-custom rounded-xl bg-primary text-secondary py-2 px-4 mr-2"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-10 w-full">
          <Swiper
            key={`testimonials-${windowWidth}`}
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
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
                spaceBetween: 30,
              },
            }}
            onSlideChange={(e) => setI(e.progress)}
          >
            {data.map((t: Testimonial, i: number) => (
              <SwiperSlide key={t.name.toLowerCase().replace(/\s+/g, "") + i}>
                <div className="flex flex-col  bg-slate-50 border-b-4 border-[#F6A728] p-10">
                  <div className="flex items-center">
                    <div className="mr-5">
                      <img src="/images/v7x.png" alt={t.name} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{t.name}</h4>
                      <p className="text-sm">{t.job}</p>
                    </div>
                  </div>
                  <p className="mt-5 text-gray-500 text-sm leading-6">
                    {t.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
