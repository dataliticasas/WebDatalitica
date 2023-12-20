import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  data: {
    title: string;
    description: string;
    img: string;
  }[];
};

const Expertise: FC<Props> = ({ data }) => {
  return (
    <section className="bg-primary py-14 flex justify-center">
      <div className="w-full max-w-6xl px-4 flex flex-col lg:flex-row">
        <div className="w-full lg:w-4/12 flex flex-col justify-center pr-10">
          <h3 className="text-3xl font-semibold text-white">¿Qué hacemos?</h3>
          <p className="text-white mt-4 mb-8 lg:mb-0">
            Utilizamos una amplia gama de herramientas y tecnologías para crear
            soluciones personalizadas para cada cliente.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {data.map((e, i: number) => (
              <SwiperSlide key={e.title.toLowerCase().replace(/\s+/g, "") + i}>
                <div className="bg-white rounded-md shadow-sm p-6 transition-all">
                  <div className="flex justify-center">
                    <img src={e.img} />
                  </div>
                  <h4 className="text-base font-semibold">{e.title}</h4>
                  <p className="text-sm text-gray-500 md:h-[120px]  mt-2">
                    {e.description}
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

export default Expertise;
