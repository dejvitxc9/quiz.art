"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import { RootState, useAppDispatch } from "./../store/store";
import { useSelector } from "react-redux";
import { loadPointFromDevice } from "@/utils";
import { useEffect } from "react";
import { setPoints } from "@/store/features/points/pointsSlice";

const NavBar = () => {
  const router = useRouter();
  const pointCount = useSelector((state: RootState) => state.points.value);
  const appdispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      appdispatch(setPoints(loadPointFromDevice()));
    };
  }, []);

  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href={"/"} className="flex justify-center items-center">
          <Image
            src={"/logo.png"}
            alt="hero logo"
            height={32}
            width={64}
            className="object-cover"
          />
        </Link>

        <CustomButton
          title="Home"
          btnStyle="bg-primary-blue text-white rounded-full"
          handleClick={() => {
            window.navigator.vibrate([70]);
            router.push("/");
          }}
        />
        <CustomButton
          title="Learn"
          handleClick={() => {
            window.navigator.vibrate([70]);
            router.push("/learn");
          }}
          btnStyle="bg-primary-blue text-white rounded-full"
        />
        <CustomButton
          title="Quiz"
          handleClick={() => {
            window.navigator.vibrate([70]);
            router.push("/quiz");
          }}
          btnStyle="bg-primary-blue text-white rounded-full"
        />
        <CustomButton
          title={`Points: ${pointCount}`}
          handleClick={() => {
            window.navigator.vibrate([200]);
            router.push("/points");
          }}
          btnStyle="bg-primary-blue text-white rounded-full w-[200px]"
        />
      </nav>
    </header>
  );
};
export default NavBar;
