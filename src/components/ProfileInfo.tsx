import { User } from "@prisma/client";
import ProfileInfoAvatar from "./ProfileInfoAvatar";

export default async function ProfileInfo({
  user,
  isMyProfile,
}: {
  user: User;
  isMyProfile: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-4">
      <ProfileInfoAvatar user={user} isMyProfile={isMyProfile} />
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">{user.name}</h1>
        <h4 className="text-2xl text-black/40">{user.username}</h4>
      </div>
    </div>
  );
}
