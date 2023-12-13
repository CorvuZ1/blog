import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Container } from "~/components/container/container";
import { Button } from "~/components/button/button";

export interface IFixedNavProps {
  className?: string;
  links: {
    label: string;
    href: string;
  }[];
}

export const FixedNav: FC<IFixedNavProps> = props => {
  const { links, className } = props;

  return (
    <div className={twMerge("fixed bottom-0 w-full", className)}>
      <Container className="flex w-full justify-between" size="xs">
        {links.map((item, index) => (
          <Button href={item.href} key={index}>
            {item.label}
          </Button>
        ))}
      </Container>
    </div>
  );
};
