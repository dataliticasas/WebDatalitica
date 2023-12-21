import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type Props = {
  data: {
    img: string;
  }[];
};

const Aplications: FC<Props> = ({ data }) => {
  return (
    <section>
      <div className="w-full flex justify-center" id="desarrollo">
        <div className="w-full max-w-6xl px-4">
          <h3 className="text-3xl font-semibold mb-10 md:mb-4 border-l-8 border-[#4E9EB1] pl-2">
            Aplications
          </h3>
          <p className="hidden md:block mb-10">
          We develop portable applications customized to the needs of our clients, 
          aiming to simplify and automate their processes. These applications allow us 
          to speed up data loading, from anywhere, even offline, to see the information updated in real 
          time and to configure notifications, mails and automate tasks.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center bg-gray-100 pt-0 md:pt-5 md:pb-0">
        <div className="w-full h-full max-w-6xl px-4 relative">
          <div className="flex flex-col md:flex-row my-5 md:my-10">
            <div className="hidden md:block md:w-8/12 md:pr-20 justify-center">
              <img 
                className="hidden md:block object-contain"
                src="/images/cc7.png"
              />
            </div>
            <div className="block md:hidden md:w-8/12 md:pr-20 justify-center">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                navigation
                modules={[Navigation]}
              >
                {data.map((e, i: number) => (
                  <SwiperSlide
                    key={e.img.toLowerCase().replace(/\s+/g, "") + i}
                  >
                    <div className="flex justify-center">
                      <img src={e.img} width={340} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="hidden md:w-4/12 md:flex flex-col md:pt-0 lg:pt-10">
              <div className="flex mb-4 items-center">
                <svg
                  className="text-[#4E9EB1] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  zoomAndPan="magnify"
                  viewBox="0 0 30 30.000001"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <clipPath id="id1">
                      <path
                        d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                        clipRule="nonzero"
                        fill="#4E9EB1"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#id1)">
                    <path
                      fill="#4e9eb1"
                      d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                      fillOpacity="1"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
                Easy data loading
              </div>
              <div className="flex mb-4 items-center">
                <svg
                  className="text-[#4E9EB1] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  zoomAndPan="magnify"
                  viewBox="0 0 30 30.000001"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <clipPath id="id1">
                      <path
                        d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                        clipRule="nonzero"
                        fill="#4e9eb1"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#id1)">
                    <path
                      fill="#4e9eb1"
                      d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                      fillOpacity="1"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
                Automate tasks
              </div>
              <div className="flex mb-4 items-center">
                <svg
                  className="text-[#4E9EB1] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  zoomAndPan="magnify"
                  viewBox="0 0 30 30.000001"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <clipPath id="id1">
                      <path
                        d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                        clipRule="nonzero"
                        fill="#4e9eb1"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#id1)">
                    <path
                      fill="#4e9eb1"
                      d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                      fillOpacity="1"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
                Real-time data
              </div>
              <div className="flex mb-4 items-center">
                <svg
                  className="text-[#4E9EB1] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  zoomAndPan="magnify"
                  viewBox="0 0 30 30.000001"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <clipPath id="id1">
                      <path
                        d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                        clipRule="nonzero"
                        fill="#4e9eb1"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#id1)">
                    <path
                      fill="#4e9eb1"
                      d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                      fillOpacity="1"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
                Connection with external systems
              </div>
              <div className="flex mb-4 items-center">
                <svg
                  className="text-[#4E9EB1] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  zoomAndPan="magnify"
                  viewBox="0 0 30 30.000001"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <clipPath id="id1">
                      <path
                        d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                        clipRule="nonzero"
                        fill="#4e9eb1"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#id1)">
                    <path
                      fill="#4e9eb1"
                      d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                      fillOpacity="1"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
                Geolocation in real time
              </div>
              <div className="flex mb-4 items-center">
                <svg
                  className="text-[#4E9EB1] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  zoomAndPan="magnify"
                  viewBox="0 0 30 30.000001"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <clipPath id="id1">
                      <path
                        d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                        clipRule="nonzero"
                        fill="#4e9eb1"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#id1)">
                    <path
                      fill="#4e9eb1"
                      d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                      fillOpacity="1"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
                Personalized mails and notifications
              </div>
              <div className="flex mb-4 items-center">
                <svg
                  className="text-[#4E9EB1] mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  zoomAndPan="magnify"
                  viewBox="0 0 30 30.000001"
                  height="40"
                  preserveAspectRatio="xMidYMid meet"
                  version="1.0"
                >
                  <defs>
                    <clipPath id="id1">
                      <path
                        d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                        clipRule="nonzero"
                        fill="#4e9eb1"
                      ></path>
                    </clipPath>
                  </defs>
                  <g clipPath="url(#id1)">
                    <path
                      fill="#4e9eb1"
                      d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                      fillOpacity="1"
                      fillRule="nonzero"
                    ></path>
                  </g>
                </svg>
                Permission and access levels
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 flex md:hidden justify-center mt-10">
        <div>
          <div className="flex items-center mb-4">
            <svg
              className="text-[#4E9EB1] mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                    clipRule="nonzero"
                    fill="#4e9eb1"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fill="#4e9eb1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                  fillOpacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            Agilizar la carga de datos
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="text-[#4E9EB1] mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                    clipRule="nonzero"
                    fill="#4e9eb1"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fill="#4e9eb1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                  fillOpacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            Automatizar tareas
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="text-[#4E9EB1] mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                    clipRule="nonzero"
                    fill="#4e9eb1"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fill="#4e9eb1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                  fillOpacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            Informacion en tiempo real
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="text-[#4E9EB1] mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                    clipRule="nonzero"
                    fill="#4e9eb1"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fill="#4e9eb1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                  fillOpacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            Conexion con sistemas externos
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="text-[#4E9EB1] mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                    clipRule="nonzero"
                    fill="#4e9eb1"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fill="#4e9eb1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                  fillOpacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            Geolocalización
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="text-[#4E9EB1] mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                    clipRule="nonzero"
                    fill="#4e9eb1"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fill="#4e9eb1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                  fillOpacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            Mensajes y notificaciones
          </div>
          <div className="flex items-center mb-4">
            <svg
              className="text-[#4E9EB1] mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              zoomAndPan="magnify"
              viewBox="0 0 30 30.000001"
              height="40"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
            >
              <defs>
                <clipPath id="id1">
                  <path
                    d="M 2.328125 4.222656 L 27.734375 4.222656 L 27.734375 24.542969 L 2.328125 24.542969 Z M 2.328125 4.222656 "
                    clipRule="nonzero"
                    fill="#4e9eb1"
                  ></path>
                </clipPath>
              </defs>
              <g clipPath="url(#id1)">
                <path
                  fill="#4e9eb1"
                  d="M 27.5 7.53125 L 24.464844 4.542969 C 24.15625 4.238281 23.65625 4.238281 23.347656 4.542969 L 11.035156 16.667969 L 6.824219 12.523438 C 6.527344 12.230469 6 12.230469 5.703125 12.523438 L 2.640625 15.539062 C 2.332031 15.84375 2.332031 16.335938 2.640625 16.640625 L 10.445312 24.324219 C 10.59375 24.472656 10.796875 24.554688 11.007812 24.554688 C 11.214844 24.554688 11.417969 24.472656 11.566406 24.324219 L 27.5 8.632812 C 27.648438 8.488281 27.734375 8.289062 27.734375 8.082031 C 27.734375 7.875 27.648438 7.679688 27.5 7.53125 Z M 27.5 7.53125 "
                  fillOpacity="1"
                  fillRule="nonzero"
                ></path>
              </g>
            </svg>
            Perfiles de distinto tipo
          </div>
        </div>
      </div>
      <p className="px-4 pt-10 blox md:hidden">
        Desarrollamos aplicaciones portables adecuandonos a las necesidades de
        los clientes, apuntando a simplificar y automatizar sus procesos. Estas
        permiten agilizar la carga de datos, desde cualquier lugar, incluso sin
        conexión, ver la información actualizada en tiempo real y configurar el
        envío de notificaciones, correos y mensajes de texto.
      </p>
    </section>
  );
};

export default Aplications;
