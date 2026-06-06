import * as Avatar from "@radix-ui/react-avatar";

interface CardItem {
  id: number;
  badge: string;
  msg: string;
  name: string;
  src: string;
  alt: string;
}

interface HomeCardProps {
  items: CardItem[];
}


function HomeCard({
  items,
}: HomeCardProps) {
  return (
    <div className="grid gap-1 md:grid-cols-2 shadow-sm">
      {items.map((item) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 shadow-lg bg-white max-w-sm"
        >
          <h1 className="text-2xl font-bold">
            {item.badge}
          </h1>

          <p className="mt-2">
            {item.msg}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <Avatar.Root className="overflow-hidden rounded-full">
              <Avatar.Image
                src={item.src}
                alt={item.alt}
                className="w-10 h-10 rounded-full object-cover"
              />

              <Avatar.Fallback>
                {item.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .toUpperCase()}
              </Avatar.Fallback>
            </Avatar.Root>

            <h2 className="font-medium">
              {item.name}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HomeCard;