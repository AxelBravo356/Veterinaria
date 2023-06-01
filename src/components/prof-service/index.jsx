"use client";

import { useRef, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Image from "next/image";

register();

export default function ProfessionalService() {
  const swiperElRef = useRef(null);
  useEffect(() => {
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div className>
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="false"
        pagination="false"
      >
        <swiper-slide>
          <div className="p-16">
            <div className="grid grid-rows-2 xl:grid-cols-2 gap-5 ">
              <div className="flex justify-center xl:justify-end">
                <Image
                  src={"/Presentacion1.png"}
                  width={400}
                  height={400}
                  className="xl:w-auto"
                />
              </div>
              <div className="text-center xl:text-right">
                <h3 className="font-extrabold text-5xl">
                  Professional Service
                </h3>
                <p className="py-10 text-2xl xl:text-3xl">
                  Adquiere el mejor sistema para el control y administricación
                  de tu clínica veterinaria con PETMON. Contamos con el mejor
                  sistme e inovación del mercado, desde el control básico de tus
                  laboratorios, hasta carnets para cada amigo peludo que acuda a
                  tu servicio
                </p>
                <button className="bg-sky-500 p-4 rounded-lg text-white text-xl active:scale-[.98] active:duration-60 hover:scale-[1.01] ease-in-out transition-all ">
                  Más Información
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="p-16">
            <div className="grid grid-rows-2 xl:grid-cols-2 gap-5 ">
              <div className=" flex justify-center xl:justify-end ">
                <Image
                  src={"/Presentacion1.png"}
                  width={400}
                  height={400}
                  className="xl:w-auto"
                />
              </div>
              <div className="text-center xl:text-right">
                <h3 className="font-extrabold text-5xl">
                  Professional Service
                </h3>
                <p className="py-10 text-2xl xl:text-3xl">
                  Adquiere el mejor sistema para el control y administricación
                  de tu clínica veterinaria con PETMON. Contamos con el mejor
                  sistme e inovación del mercado, desde el control básico de tus
                  laboratorios, hasta carnets para cada amigo peludo que acuda a
                  tu servicio
                </p>
                <button className="bg-sky-500 p-4 rounded-lg text-white text-xl active:scale-[.98] active:duration-60 hover:scale-[1.01] ease-in-out transition-all ">
                  Más Información
                </button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
}
