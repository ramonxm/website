import { ReactNode } from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";

type Item = {
  href: string;
  title: string;
  icon: ReactNode;
  className: string;
  header: ReactNode;
  description: string;
};

type CardsProps = {
  items: Item[];
};

export const Cards = ({ items }: CardsProps) => {
  return (
    <BentoGrid className="mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          icon={item.icon}
          href={item.href}
          title={item.title}
          header={item.header}
          className={item.className}
          description={item.description}
        />
      ))}
    </BentoGrid>
  );
};
