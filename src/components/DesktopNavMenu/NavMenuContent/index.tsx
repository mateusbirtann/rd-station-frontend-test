import { useSpring, animated } from "@react-spring/web";

interface NavMenuContentProps {
  item: NavMenuProps;
  isOpen: boolean;
}

interface NavMenuProps {
  title: string;
  content?: { subTitle: string; links: { text: string; href: string }[] }[];
}

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  subTitle: string;
  links: { text: string; href: string }[];
}

const buildNavigationMenuContentItems = (
  contentItems: { subTitle: string; links: { text: string; href: string }[] }[]
) => {
  return contentItems.map((contentItem, index) => (
    <ListItem
      key={index}
      subTitle={contentItem.subTitle}
      links={contentItem.links}
    />
  ));
};

const ListItem = ({ subTitle, links }: ListItemProps) => (
  <div className="flex flex-col gap-4">
    <h2 className="font-darker text-cyan font-extrabold text-lg heading-110">
      {subTitle}
    </h2>
    <div className="rounded-full w-full h-[1px] bg-gray-lighter"></div>
    {links.map((link, index) => (
      <ul key={index}>
        <li>
          <a href={link.href}>{link.text}</a>
        </li>
      </ul>
    ))}
  </div>
);

const NavMenuContent = ({ item, isOpen }: NavMenuContentProps) => {
  const animation = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? `translateY(0)` : `translateY(-20px)`,
  });

  if (!item.content) {
    return null;
  }

  return (
    item.content && (
      <animated.div
        data-testid="nav-menu-content"
        style={animation}
        className={`${
          isOpen ? "block" : "hidden"
        } absolute left-0 top-20 mx-auto flex gap-10 w-full px-container p-4 bg-white shadow-lg z-30`}
      >
        {buildNavigationMenuContentItems(item.content)}
      </animated.div>
    )
  );
};

export default NavMenuContent;
