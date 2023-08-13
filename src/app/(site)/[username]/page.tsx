export default function Profile({
  params: { username },
}: {
  params: { username: string };
}) {
  return <div>{username}</div>;
}
