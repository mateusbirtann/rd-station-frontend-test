import { animated, useSpring } from "@react-spring/web";

type MenuItem = {
  title: string;
  content?: {
    subTitle: string;
    links: { href: string; text: string }[];
  }[];
};

type AccordionNavMenuContentProps = {
  item: MenuItem;
  isOpen: boolean;
};

const AccordionNavMenuContent = ({
  item,
  isOpen,
}: AccordionNavMenuContentProps) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0)` : `translateY(-20px)`,
  });

  if (!isOpen) {
    return null;
  }

  return (
    isOpen && (
      <animated.div
        style={animation}
        className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp"
      >
        <div className="flex flex-col gap-2 my-2">
          {item.content?.map((itemContent, index) => (
            <div key={index}>
              <div className="flex flex-col gap-2 p-4">
                <h2 className="font-darker text-cyan font-extrabold text-base heading-110">
                  {itemContent.subTitle}
                </h2>
                {itemContent.links.map((link, index) => (
                  <ul key={index}>
                    <li>
                      <a href={link.href}>{link.text}</a>
                    </li>
                  </ul>
                ))}
              </div>
              <div className="rounded-full w-full h-[1px] bg-gray-lighter"></div>
            </div>
          ))}
        </div>
      </animated.div>
    )
  );
};

export default AccordionNavMenuContent;
