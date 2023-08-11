import Link from "next/link";

export default function Register() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-medium text-center text-xl">REGISTER</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="outline-none border rounded-md p-2 transition focus:border-orange-500"
      />
      <input
        type="email"
        name="email"
        placeholder="E-Mail"
        className="outline-none border rounded-md p-2 transition focus:border-orange-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="outline-none border rounded-md p-2 transition focus:border-orange-500"
      />
      <input
        type="password"
        name="password2"
        placeholder="Password Again"
        className="outline-none border rounded-md p-2 transition focus:border-orange-500"
      />

      <button className="bg-green-600 py-2 px-3 font-medium rounded transition hover:bg-green-700 text-white">
        Register
      </button>
      <p className="self-center">or</p>
      <Link
        href="/auth/login"
        className="flex items-center justify-center bg-orange-600 py-2 px-3 font-medium rounded transition hover:bg-orange-700 text-white"
      >
        Login
      </Link>
    </div>
  );
}
