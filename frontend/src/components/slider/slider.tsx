import { FC, useEffect } from "react";
import { Swiper } from "swiper";
import { Pagination } from "swiper/modules";
import { twMerge } from "tailwind-merge";
import "swiper/css";
import "swiper/css/pagination";
import { Image } from "~/components/image/image";
import Link from "next/link";
import { withAnimation } from "~/lib/hocs/with-animation";
import { Loader } from "~/components/loader/loader";

export interface ISliderItem {
  image: string;
  label?: string;
  href?: string;
  alt?: string;
  id?: number;
}

export interface ISliderProps {
  className?: string;
  items: ISliderItem[];
  appLinks?: boolean;
}

export const _Slider: FC<ISliderProps> = props => {
  const { items, className, appLinks } = props;

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      modules: [Pagination],
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        enabled: true,
        clickable: true,
        type: "bullets",
        bulletActiveClass: "!opacity-100 !px-[12px] !opacity-[1] !rounded-full duration-[0.4s]",
        renderBullet: (index, className) =>
          `<button class='${className} swiper-pagination-bullet !opacity-40 duration-300 !bg-light-green !w-[12px] !h-[12px]'></button>`
      }
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className={twMerge("swiper overflow-hidden rounded-[52px] md:rounded-[35px]", className)}>
      <div className="swiper-wrapper ">
        {items.map((slide, index) => {
          const { href } = slide;
          const Tag = href ? (appLinks ? Link : "a") : "div";

          return (
            <div className="swiper-slide" key={slide.id || index}>
              <Tag
                href={href as string}
                className="xs:before:pt-[65%] relative h-fit w-full overflow-hidden before:relative before:block before:pt-[50.79%] after:absolute after:bottom-0 after:left-0 after:block after:h-[45px] after:w-full after:bg-gradient-to-t after:from-[black] after:from-0% after:to-transparent after:to-100%"
              >
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                  <Loader />
                </div>
                <Image
                  quality={80}
                  className="absolute left-0 top-0 z-0 h-full w-full object-cover"
                  width={900}
                  height={500}
                  src={slide.image}
                  alt={slide.alt || slide.label || ""}
                />
                {slide.label && (
                  <p className="text-xxl font-heavy absolute left-0 top-0 px-[33px] pt-[26px]">
                    {slide.label}
                  </p>
                )}
              </Tag>
            </div>
          );
        })}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export const Slider = withAnimation<ISliderProps>(_Slider);
