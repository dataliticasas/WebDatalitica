import type { FC } from "react";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import type { Message, MessageErrors } from "../../interfaces/message";
import BeatLoader from "react-spinners/BeatLoader";
import emailjs from "@emailjs/browser";

type Props = {
  layout?: "page" | "section";
  config: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
};

const initialValues: Message = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const Input = ({
  layout,
  name,
  type,
  placeholder,
  handleChange,
  handleBlur,
  value,
  errors,
}: {
  layout: "page" | "section";
  name: string;
  type: string;
  placeholder: string;
  handleChange?: any;
  handleBlur?: any;
  value?: any;
  errors?: boolean;
}) => {
  if (layout === "section") {
    return (
      <div className="mb-6">
        <label
          className={`block text-sm font-medium leading-2 capitalize ${
            errors ? "text-red-900" : "text-gray-900"
          }`}
        >
          {name}
        </label>
        <div className="relative">
          <input
            type={type}
            name={name}
            className={`peer block w-full border-0  py-1.5 focus:ring-0 focus:outline-none sm:text-sm sm:leading-6 ${
              errors ? "text-red-900" : "text-gray-900"
            }`}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}
          />
          <div
            className={`absolute inset-x-0 bottom-0 border-t  ${
              errors ? "border-red-600" : "border-gray-600"
            }`}
            aria-hidden="true"
          ></div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div
          className={`${name === "email" && "mr-0 md:mr-1"} ${
            name === "name" && "ml-0 md:ml-1"
          } relative mt-2 rounded-md shadow-sm`}
        >
          <input
            type={type}
            name={name}
            value={value}
            className={`"block pl-4 w-full rounded-md border-0 py-2.5 pr-10 sm:text-sm sm:leading-6" ${
              errors
                ? "text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
                : "ring-1 ring-inset ring-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-500"
            }`}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <div
            className={`${
              !errors ? "hidden" : "flex"
            } pointer-events-none absolute inset-y-0 right-0 items-center pr-3`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  }
};

const TextArea = ({
  handleChange,
  handleBlur,
  value,
  errors,
}: {
  handleChange?: any;
  handleBlur?: any;
  value?: any;
  errors?: boolean;
}) => (
  <div>
    <div className="relative mt-2 rounded-md shadow-sm">
      <textarea
        rows={6}
        value={value}
        name="message"
        className={`"block pl-4 w-full rounded-md border-0 py-4 pr-10 sm:text-sm sm:leading-6" ${
          errors
            ? "text-red-900 ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
            : "ring-1 ring-inset ring-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-500"
        }`}
        placeholder="Your message"
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  </div>
);

const Contact: FC<Props> = ({ layout = "section", config }) => {
  const [n, setN] = useState<string>("");
  const handleValidate = (values: Message) => {
    const errors: MessageErrors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 3) {
      errors.name = "Must be 3 characters or more";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.subject) {
      errors.subject = "Required";
    } else if (values.subject.length < 3) {
      errors.subject = "Must be 3 characters or more";
    }
    if (!values.message) {
      errors.message = "Required";
    } else if (values.message.length < 3) {
      errors.message = "Must be 3 characters or more";
    }
    return errors;
  };

  const sendEmail = async (values: any, setSubmitting: any, resetForm: any) => {
    console.log("xd");
    await emailjs
      .send(config.serviceId, config.templateId, values, config.publicKey)
      .then(
        () => {
          setN("success");
          setSubmitting(false);
          resetForm();
        },
        () => {
          setN("failed");
        }
      );
  };

  useEffect(() => {}, []);

  return (
    <section className="flex justify-center">
      <div
        className={`w-full max-w-6xl flex  ${
          layout === "page" && "flex-col md:flex-row"
        } px-4`}
      >
        {layout === "page" ? (
          <div className="flex flex-1 flex-col md:justify-around lg:justify-between md:py-10 lg:py-20 ">
            <h2 className="text-5xl lg:text-6xl font-bold">
              Cómo podemos
              <span className="text-[#0C6480] block">ayudarte?</span>
            </h2>
            <div className="hidden md:flex">
              <div className="flex flex-col mr-6">
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>

                  <p className="text-sm ml-2">Email</p>
                </div>
                <span className="text-gray-500 text-sm line-clamp-1">
                  ensome@info.co.us
                </span>
              </div>
              <div className="flex flex-col mr-6">
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm ml-2">Celular</p>
                </div>
                <span className="text-gray-500 text-sm line-clamp-1">
                  +1 601-201-5580
                </span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm ml-2">Celular</p>
                </div>
                <span className="text-gray-500 text-sm line-clamp-1">
                  +1 601-201-5580
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 flex-col justify-between md:py-20 ">
            <h3 className="text-3xl font-semibold">
              Tenes alguna duda? <br /> Contactanos y te asesoramos!
            </h3>
            
            <div className="mt-5">
              <p className="text-gray-500 text-base mt-2 md:mt-0">
                Email 
              </p>
              <p className="text-sm mt-2 md:mt-0">contacto@datalitica.com.ar</p>
            </div>
            <div className="py-4 mb-4">
              <p className="text-gray-500 text-base">Celular</p>
              <p className="text-sm mt-2 md:mt-0">+5493813201906</p>
              <p className="text-sm mt-2 md:mt-0">+34652389608</p>
            </div>
            <a
              href="/es/contacto"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm text-center md:w-[200px] mt-2 md:mt-0"
            >
              Contactanos
            </a>
          </div>
        )}
        <div
          className={`${
            layout !== "page" && "hidden pl-16"
          } md:flex flex-1 flex-col `}
        >
          <div
            className={`py-20 md:px-10 ${layout === "section" && "shadow-xl"}`}
          >
            {layout !== "page" && (
              <h3 className="text-3xl mb-8 font-semibold">Contactanos</h3>
            )}
            <Formik
              initialValues={initialValues}
              validate={handleValidate}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                sendEmail(values, setSubmitting, resetForm);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form onSubmit={handleSubmit}>
                  <div
                    className={`${
                      layout === "page" &&
                      "md:flex md:flex-row-reverse md:justify-between"
                    }`}
                  >
                    <div className={`${layout === "page" && "md:w-6/12"}`}>
                      <Input
                        layout={layout}
                        type="text"
                        name="name"
                        placeholder="Nombre de ejemplo"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.name}
                        errors={!!errors.name && touched.name}
                      />
                    </div>
                    <div className={`${layout === "page" && "md:w-6/12"}`}>
                      <Input
                        layout={layout}
                        type="email"
                        name="email"
                        placeholder="hello@gmail.com"
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.email}
                        errors={!!errors.email && touched.email}
                      />
                    </div>
                  </div>

                  <Input
                    layout={layout}
                    type="text"
                    name="subject"
                    placeholder="Trabajo"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.subject}
                    errors={!!errors.subject && touched.subject}
                  />

                  {layout === "page" ? (
                    <TextArea
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.message}
                      errors={!!errors.message && touched.message}
                    />
                  ) : (
                    <Input
                      layout={layout}
                      type="text"
                      name="message"
                      placeholder="Tu mensaje"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.message}
                      errors={!!errors.message && touched.message}
                    />
                  )}

                  <div
                    className={`flex justify-between items-center  ${
                      layout === "page"
                        ? "mt-10 flex-col-reverse md:flex-row"
                        : "mt-20"
                    }`}
                  >
                    <div className={`${layout === "page" && "pt-5 md:pt-0"}`}>
                      <p
                        className={`${
                          n === "success" ? "block" : "hidden"
                        } text-green-600`}
                      >
                        Mensaje enviado
                      </p>
                      <p
                        className={`${
                          n === "failed" ? "block" : "hidden"
                        } text-red-600`}
                      >
                        Error al enviar el mensaje
                      </p>
                    </div>
                    <button
                      type="submit"
                      className={`rounded-md  ${
                        layout === "page" ? "w-full md:w-[140px]" : "w-[140px]"
                      } py-2.5 text-sm font-semibold text-white shadow-sm ${
                        isSubmitting ? "bg-gray-300" : "bg-primary"
                      }`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <BeatLoader
                          color={"#ffffff"}
                          size={5}
                          aria-label="Loading Spinner"
                          data-testid="loader"
                        />
                      ) : (
                        <span>Enviar</span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
        <div
          className={`${layout === "page" ? "block md:hidden mb-4" : "hidden"}`}
        >
          <div className="flex flex-col mb-6">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>

              <p className="text-sm ml-2">Email</p>
            </div>
            <span className="text-gray-500 text-sm">contacto@datalitica.com.ar</span>
          </div>
          <div className="flex flex-col mb-6">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm ml-2">Celular</p>
            </div>
            <span className="text-gray-500 text-sm">+5493813201906</span>
            <span className="text-gray-500 text-sm">+34652389608</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm ml-2">Celular</p>
            </div>
            <span className="text-gray-500 text-sm">+5493813201906</span>
            <span className="text-gray-500 text-sm">+34652389608</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
