import HTMLReactParser from "html-react-parser";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { withAnimation } from "~/lib/hocs/with-animation";
import { Image } from "~/components/image/image";
import { Icon } from "~/components/icon/icon";

export interface IWorkCardProps {
  className?: string;
  date: string;
  label: string;
  description: string;
  href: string;
  image: string;
  alt?: string;
  id?: number;
  isSimpleVariant?: boolean;
}

const _WorkCard: FC<IWorkCardProps> = props => {
  const { date, description, href, label, className, image, alt, id, isSimpleVariant } = props;

  return (
    <Link
      href={href}
      title={label}
      className={twMerge(
        "bg-dark-green hover:bg-green grid grid-cols-2 gap-[20px] overflow-hidden rounded-[42px] p-[20px] transition-colors duration-300",
        isSimpleVariant && "grid-cols-1 p-[15px]",
        className
      )}
    >
      <div className="bg-green relative flex items-center justify-center rounded-[30px] after:relative after:block after:pt-[100%] after:content-['']">
        <Image
          src={image}
          width={400}
          height={400}
          alt={alt || label || ""}
          className="absolute h-full w-full rounded-[30px] object-cover"
        />
      </div>
      <div className={twMerge(isSimpleVariant && "hidden")}>
        <div className="text-light-green mb-[6px] flex items-center">
          <Icon name="clock" className="mr-[8px]" />
          <span>{date}</span>
        </div>
        <h2 className="mb-[12px] text-xl font-semibold">{label}</h2>
        <div>{HTMLReactParser(description)}</div>
      </div>
    </Link>
  );
};

export const WorkCard = withAnimation(_WorkCard);
