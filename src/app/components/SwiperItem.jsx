import { CloudinaryContext, Video, Image } from "cloudinary-react";
import { cloudinaryName } from "../data";

const SwiperItem = ({
  title,
  content,
  image,
  video,
  index,
  playVideo,
  videoRefs,
  isVisible, // Receive the isVisible prop
}) => {
  // Control the visibility of the overlay using the isVisible prop
  const overlayStyle = { display: isVisible ? "block" : "none" };

  return (
    <>
      {/* Overlay component */}
      <div
        className="absolute left-5 top-5 z-10 h-[calc(100%-40px)] w-[calc(100%-40px)] text-white rounded-[32px] overflow-hidden"
        style={overlayStyle}
      >
        <Image
          cloudName={cloudinaryName}
          publicId={image}
          className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          {title && <h2 className="text-[100px] font-extrabold">{title}</h2>}
          {content && (
            <p className="text-[30px] font-bold leading-[30px] text-center mb-8">
              {content}
            </p>
          )}
          <div
            className="flex h-[67px] w-[67px] cursor-pointer items-center justify-center rounded-full bg-bloody text-white font-extrabold leading-[47px] text-xl absolute left-1/2 -translate-x-1/2 bottom-20"
            onClick={() => playVideo(index)}
          >
            PLAY
          </div>
        </div>
      </div>

      {/* Video component */}
      <CloudinaryContext
        cloudName={cloudinaryName}
        className="h-full overflow-hidden rounded-[32px]"
      >
        <Video
          publicId={video}
          className="h-full w-full object-cover"
          innerRef={videoRefs.current[index]} // Link the ref to the video element
        />
      </CloudinaryContext>
    </>
  );
};

export default SwiperItem;
