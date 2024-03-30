import { AvatarDemo } from "./components/Avatar";
import ListOfCards from "./components/ListOfCards";

export const revalidate = 30;

export default function Home() {
  return (
    <div className="bg-background">
      <AvatarDemo />
      <ListOfCards />
    </div>
  );
}
