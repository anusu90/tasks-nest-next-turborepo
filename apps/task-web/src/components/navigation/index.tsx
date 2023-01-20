import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/", current: true },
  { name: "Protected Route (Client)", href: "/client", current: false },
  { name: "Protected Route (Server)", href: "/server_page", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const { status, data } = useSession();
  const [userDropDown, setUserDropDown] = useState<boolean>(false);

  const handleMouseOver = () => {
    setUserDropDown(!userDropDown);
  };

  const renderUserStatus = () => {
    if (status === "loading") return <></>;
    if (status === "authenticated")
      return (
        <div className="z-50">
          <div
            className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer"
            onClick={handleMouseOver}
          >
            <span className="sr-only">Open user menu</span>
            <Image
              className="h-8 w-8 rounded-full z-50"
              src={
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
              alt=""
              width={32}
              height={32}
            />
          </div>
          {userDropDown ? (
            <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div>
                <span
                  className={classNames(
                    true ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Welcome, {data?.user?.name}
                </span>
              </div>
              <div>
                <a
                  href="#"
                  className={classNames(
                    true ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Profile
                </a>
              </div>
              <div
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                }}
              >
                <a
                  className={classNames(
                    true ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Sign out
                </a>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    return (
      <div
        className={classNames(
          "bg-gray-900 text-white cursor-pointer",
          "px-3 py-2 rounded-md text-sm font-medium"
        )}
        onClick={() => {
          signIn();
        }}
      >
        Sign In
      </div>
    );
  };

  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Profile dropdown */}
            <div>{renderUserStatus()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
