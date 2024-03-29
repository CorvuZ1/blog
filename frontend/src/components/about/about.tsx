import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Image } from "~/components/image/image";
import HTMLReactParser from "html-react-parser";
import { withAnimation } from "~/lib/hocs/with-animation";

export interface IAboutProps {
  image: string;
  description: string;
  className?: string;
  alt?: string;
}

export const _About: FC<IAboutProps> = props => {
  const { description, image, className, alt } = props;

  return (
    <div className={twMerge("flex md:flex-col", className)}>
      <div className="relative mr-[20px] h-fit flex-1 overflow-hidden before:relative before:block before:pt-[119.17%] md:mb-[20px] md:mr-[0px] md:before:pt-[65%]">
        <Image
          className="absolute left-0 top-0 h-full w-full rounded-[42px] object-cover md:rounded-[25px]"
          width={450}
          height={450}
          src={image}
          alt={alt || ""}
        />
      </div>
      <div className="flex-1">{HTMLReactParser(description)}</div>
    </div>
  );
};

export const About = withAnimation<IAboutProps>(_About);
