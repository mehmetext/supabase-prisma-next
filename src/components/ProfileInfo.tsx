import { User } from "@prisma/client";
import Avatar from "./Avatar";

export default async function ProfileInfo({ user }: { user: User }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Avatar
        alt={user.username}
        src={user.image}
        className="w-40 h-40 text-7xl"
      />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">{user.name}</h1>
        <h4 className="text-2xl text-black/40">{user.username}</h4>
      </div>
    </div>
  );
}
