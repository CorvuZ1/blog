import { FC, useEffect } from "react";
import { Swiper } from "swiper";
import { Pagination } from "swiper/modules";
import { twMerge } from "tailwind-merge";
import "swiper/css";
import "swiper/css/pagination";
import { Image } from "~/components/image/image";

export interface ISliderItem {
  img: string;
  label: string;
  alt?: string;
  id?: number;
  width: number;
  height: number;
}

export interface ISliderProps {
  className?: string;
  items: ISliderItem[];
}

export const Slider: FC<ISliderProps> = props => {
  const { items, className } = props;

  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      modules: [Pagination],
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        enabled: true,
        clickable: true,
        type: "bullets",
        renderBullet() {
          return "<button class='swiper-pagination-bullet !bg-green !w-[10px] !h-[10px]'></button>";
        }
      }
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className={twMerge("swiper overflow-hidden rounded-[52px]", className)}>
      <div className="swiper-wrapper ">
        {items.map((slide, index) => (
          <div className="swiper-slide" key={slide.id || index}>
            <div className="relative h-fit w-full overflow-hidden before:relative before:block before:pt-[50.79%] after:absolute after:bottom-0 after:left-0 after:block after:h-[45px] after:w-full after:bg-gradient-to-t after:from-[black] after:from-0% after:to-transparent after:to-100%">
              <Image
                quality={80}
                className="absolute left-0 top-0 z-0 h-full w-full object-cover"
                src={slide.img}
                alt={slide.alt || ""}
                width={slide.width}
                height={slide.height}
              />
              <p className="text-xxl font-heavy absolute left-0 top-0 px-[33px] pt-[26px]">
                {slide.label}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};
