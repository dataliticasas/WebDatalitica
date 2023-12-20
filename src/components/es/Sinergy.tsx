import type { FC } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";

type Props = {
  layout: "home" | "us";
  data: {
    name: string;
    img: string;
  }[];
};

const Sinergy: FC<Props> = ({ data, layout }) => {
  return (
    <div className={`bg-gray-50 py-10 ${layout === "us" && "md:bg-white"}`}>
      <div
        className={`mx-auto max-w-6xl px-4 ${layout === "us" && "md:block"} `}
      >
        <div
          className={`w-full ${
            layout === "us" && "md:w-8/12 sm:pr-10 md:pr-20"
          }`}
        >
          <h3 className="text-3xl font-semibold leading-8 text-gray-900">
            Sinergias
          </h3>
          <p className={`block mt-4 ${layout === "us" && "md:hidden"}`}>
            Trabajamos y realizamos conexiones con distintas empresas.
          </p>
          <p className={`hidden mt-4 ${layout === "us" && "md:block"}`}>
            Nos interesa ofrecerle a nuestros clientes las mejores soluciones,
            por eso realizamos integraciones directas y especificas con los
            softwares, herramientas y ERP que utilicen sus empresas. Tenemos
            asociaciones con empresas de geolacalizacion, sondas de control,
            herramientas de gestion y softwares contables.
          </p>
        </div>
        <div
          className={`mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-4 lg:mx-0 lg:max-w-none  ${
            layout === "us" ? "lg:grid-cols-3" : "lg:grid-cols-6"
          }`}
        >
          {data.map((item: any, i: any) => (
            <img
              key={item.name.toLowerCase().replace(/\s+/g, "") + "top" + i}
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1"
              src={item.img}
              alt={item.name}
              width="158"
              height="48"
            />
          ))}
        </div>
        {/* <div className="block md:hidden mt-10 w-full">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            navigation
            modules={[Navigation]}
          >
            {data.map((item, i: number) => (
              <SwiperSlide
                key={item.name.toLowerCase().replace(/\s+/g, "") + "bot" + i}
              >
                <img
                  className="w-full object-contain max-h-12"
                  src={item.img}
                  alt={item.name}
                  width="158"
                  height="48"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div> */}
      </div>
    </div>
  );
};

export default Sinergy;
