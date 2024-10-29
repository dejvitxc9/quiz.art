import { ArtDataProps } from "@/types";

const ArtContainer = ({
  id,
  title,
  artist_title,
  style_title,
  date_start,
  date_end,
  image_id,
  department_title,
  description,
}: ArtDataProps) => {
  return (
    <div className="flex flex-row flex-wrap bg-slate-600 text-white rounded-lg p-4 mb-4 font-semibold relative gap-4">
      <div className="flex flex-1 flex-col">
        <div className="flex justify-center bg-slate-500 rounded-lg min-w-48">
          <img
            className="image-ratio object-contain rounded-lg"
            alt={`${artist_title} ${title} ${id}`}
            src={`https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`}
          />
        </div>
        <div className="flex flex-row flex-wrap justify-between mt-4 gap-4">
          <div className="p-2 bg-slate-500 rounded-lg">
            <p>Style: {style_title}</p>
          </div>
          <div className="p-2 bg-slate-500 rounded-lg">
            <p>Creation started: {date_start}</p>
          </div>
          <div className="p-2 bg-slate-500 rounded-lg">
            <p>Creation ended: {date_end}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4">
        <div className="p-2 bg-slate-500 rounded-lg">
          <h2 className="mb-2 text-xl">Author: {artist_title}</h2>
          <h3 className="text-zinc-50">Title: {title}</h3>
        </div>
        <div className="p-2 bg-slate-500 rounded-lg">
          Stored in: {department_title}
        </div>
        {description ? (
          <div
            className="rounded-lg p-2 bg-slate-500"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default ArtContainer;
