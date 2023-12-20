import type { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

type Props = {
  data: {
    img: string;
  }[];
};

const Panels: FC<Props> = ({ data }) => {
  return (
    <section>
      <div className="w-full flex justify-center" id="paneles">
        <div className="w-full max-w-6xl px-4">
          <h3 className="text-3xl font-semibold mb-10 md:mb-4 border-l-8 border-[#4E9EB1] pl-2">
            Paneles dinámicos
          </h3>
          <p className="hidden md:block mb-10">
            Desarrollamos tableros de control dinámicos donde visualizar de
            manera interactiva los datos, entregando una herramienta clave para
            la supervisión y el análisis del estado de su empresa, buscando
            exponer tendencias, posibles problemas, encontrar respuestas y ver
            métricas en tiempo real. Los paneles cuentan con múltiples filtros,
            gráficos interactivos, mapas y reportes e informes periódicos
            automatizados, que permiten a quien toma las decisiones ahorrar
            tiempo en tareas operativas y hacer foco en lo que solo ellos pueden
            hacer.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center bg-gray-100 py-10 md:py-20">
        <div className="w-full h-full max-w-6xl px-4 relative">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-8/12 md:px-10 lg:pr-20">
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
                      <img src={e.img} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="hidden md:w-4/12 md:flex flex-col">
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
                Nuclear información
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
                Control en tiempo real
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
                Reportes periodicos
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
                Compatibles con cualquier dispositivo
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
                Facil lectura
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
            Nuclear información
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
            Control en tiempo real
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
            Reportes periodicos
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
            Compatibles con cualquier <br /> dispositivo
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
            Facil lectura
          </div>
        </div>
      </div>
      <p className="px-4 pt-10 blox md:hidden">
        Desarrollamos tableros de control dinámicos donde visualizar de manera
        interactiva los datos, entregando una herramienta clave para la
        supervisión y el análisis del estado de su empresa, buscando exponer
        tendencias, posibles problemas, encontrar respuestas y ver métricas en
        tiempo real. Los paneles cuentan con múltiples filtros, gráficos
        interactivos, mapas y reportes e informes periódicos automatizados, que
        permiten a quien toma las decisiones ahorrar tiempo en tareas operativas
        y hacer foco en lo que solo ellos pueden hacer.
      </p>
    </section>
  );
};

export default Panels;
