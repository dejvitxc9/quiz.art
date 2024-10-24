"use client";

import { ArtLearnCard } from "@/components";
import LoadingAnim from "@/components/LoadingAnim";
import { fetchArtData } from "@/store/features/artData/artData";
import { RootState, useAppDispatch } from "@/store/store";
import { ArtDataProps } from "@/types";
import { getQuizArtIDs } from "@/utils";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Learn = () => {
  const artList = useSelector((state: RootState) => state.artDB.artData);

  const appDispatch = useAppDispatch();

  useEffect(() => {
    const loadData = () => {
      appDispatch(fetchArtData(getQuizArtIDs(10)));
    };
    return () => loadData();
  }, []);

  return (
    <main className="main__container">
      <div className="flex-1 pt-36 padding-x">
        <div className="flex flex-col">
          {artList.length > 0 ? (
            artList.map((art: ArtDataProps) => (
              <ArtLearnCard
                key={art.id}
                id={art.id}
                title={art.title}
                image_id={art.image_id}
                style_title={art.style_title}
                date_start={art.date_start}
                date_end={art.date_end}
                artist_title={art.artist_title}
                department_title={art.department_title}
                description={art.description}
              />
            ))
          ) : (
            <LoadingAnim />
          )}
        </div>
      </div>
    </main>
  );
};

export default Learn;
