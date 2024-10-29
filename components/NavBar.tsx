"use client";

import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import { RootState } from "./../store/store";
import { useSelector, useDispatch } from "react-redux";
import { loadPointFromDevice } from "@/utils";
import { useEffect } from "react";
import { setPoints } from "@/store/features/points/pointsSlice";

const NavBar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pointCount = useSelector((state: RootState) => state.points.value);

  useEffect(() => {
    const points = loadPointFromDevice();
    dispatch(setPoints(points));
  }, [dispatch]);

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
          btnStyle="bg-teal-600 text-white font-bold rounded-full hidden sm:block"
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
          btnStyle="bg-teal-600 text-white font-bold rounded-full"
        />
        <CustomButton
          title="Quiz"
          handleClick={() => {
            window.navigator.vibrate([70]);
            router.push("/quiz");
          }}
          btnStyle="bg-teal-600 text-white font-bold rounded-full"
        />
        <CustomButton
          title={`Points: ${pointCount}`}
          handleClick={() => {
            window.navigator.vibrate([70]);
            router.push("/points");
          }}
          btnStyle="bg-teal-600 text-white font-bold rounded-full"
        />
      </nav>
    </header>
  );
};

export default NavBar;
