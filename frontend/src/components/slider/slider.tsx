import { FC, useEffect } from "react";
import { Swiper } from "swiper";
import { Pagination } from "swiper/modules";
import { twMerge } from "tailwind-merge";
import "swiper/css";
import "swiper/css/pagination";

export interface ISliderItem {
  img: string;
  label: string;
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
      spaceBetween: 15,
      modules: [Pagination],
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        enabled: true,
        clickable: true,
        type: "bullets",
        renderBullet() {
          return "<button class='swiper-pagination-bullet !bg-green !w-[12px] !h-[12px]'></button>";
        }
      }
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className={twMerge("swiper", className)}>
      <div className="swiper-wrapper">
        {items.map(slide => (
          <div className="swiper-slide">
            <div>
              <img src={slide.img} alt={slide.label} />
              <p>{slide.label}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};
