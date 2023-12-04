import NextImage, { ImageProps } from "next/image";
import { FC } from "react";

export interface IImageProps extends Omit<ImageProps, "loading"> {
  src: string;
}

export const Image: FC<IImageProps> = props => {
  const { src, ...rest } = props;

  const serverImagePath = process.env.NEXT_PUBLIC_NGINX_HOSTNAME;
  const imgPath = src.startsWith("/uploads") ? serverImagePath + src : src;

  return <NextImage src={imgPath} {...rest} />;
};
