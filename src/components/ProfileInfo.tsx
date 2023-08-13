import { User } from "@prisma/client";
import Avatar from "./Avatar";

export default function ProfileInfo({ user }: { user: User }) {
  return (
    <div className="flex flex-col items-center">
      <Avatar
        alt={user.username}
        src={user.image}
        className="w-40 h-40 text-7xl"
      />
    </div>
  );
}
