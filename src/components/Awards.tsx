import type { FC } from "react";
// import { a } from "../../dist/_astro/navigation.333248a7";
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

const Awards: FC<Props> = ({ data, layout }) => {
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
            Reconocimientos
          </h3>
          <p className={`hidden mt-4 ${layout === "us" && "md:block"}`}>
          
          </p>
        </div>
        <div
          className={`mx-auto mt-10 grid max-w-lg grid-cols- items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-4 lg:mx-0 lg:max-w-none  ${
            layout === "us" ? "lg:grid-cols-1" : "lg:grid-cols-6"
          }`}
        >
          {data.map((item: any, i: any) => (
            <a href = "https://www.designrush.com/agency/it-services/ar" target = "_blank" key={item.name.toLowerCase().replace(/\s+/g, "") + "top" + i}>
              <img
              className="col-span-12 max-h-[130px] w-full object-contain   "
              src={item.img}
              alt={item.name}
            />
            </a>
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

export default Awards;
