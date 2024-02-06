import {
  CloudinaryContext,
  Video,
  Image as CloudinaryImage,
} from "cloudinary-react";
import { cloudinaryName } from "../data";
import Image from "next/image";
import { Animate } from "./Animate";

const SwiperItemMobile = ({
  title,
  content,
  image,
  video,
  index,
  playVideo,
  videoRefs,
  isVisible,
  swiperInstance,
  resetOverlayVisibility,
}) => {
  // Control the visibility of the overlay using the isVisible prop
  const overlayStyle = { display: !isVisible ? "flex" : "none" };

  const copyToClipboard = () => {
    // Client-side only
    if (typeof window !== "undefined") {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white relative">
      <div className="flex-1 relative">
        <CloudinaryImage
          cloudName={cloudinaryName}
          publicId={image}
          className="absolute top-0 left-0 w-full h-full object-cover brightness-75"
        />
        <div
          className="flex h-[67px] w-[67px] cursor-pointer items-center justify-center rounded-full bg-bloody text-white font-extrabold leading-[47px] text-xl absolute left-1/2 bottom-1/2 -translate-x-1/2 translate-y-1/2 uppercase shadow-lg"
          onClick={() => playVideo(index)}
        >
          PLAY
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-3">
        <Animate animationType="zoom" cascade triggerOnce={false}>
          {title && (
            <h2 className="text-4xl font-extrabold text-center uppercase">
              {title}
            </h2>
          )}
          {content && (
            <p className="text-xl font-bold text-center max-w-[250px] mx-auto leading-[normal]">
              {content}
            </p>
          )}
        </Animate>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black flex items-center justify-center"
        style={overlayStyle}
      >
        <CloudinaryContext cloudName={cloudinaryName} className="relative">
          <Video
            publicId={video}
            className=""
            innerRef={videoRefs.current[index]} // Link the ref to the video element
          />
        </CloudinaryContext>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-x-5">
          <Animate animationType="fade" direction="up" triggerOnce={false}>
            <div className="h-9 w-9 border border-white rounded-full flex items-center justify-center group transition-all bg-black bg-opacity-10 hover:bg-white cursor-pointer">
              <Image
                src="/share.svg"
                width={14}
                height={14}
                alt="Slide Up"
                className="group-hover:brightness-0"
                onClick={() => copyToClipboard()}
              />
            </div>
            <div
              className="flex h-[67px] w-[67px] cursor-pointer items-center justify-center rounded-full bg-bloody text-white font-extrabold leading-[47px] text-xl uppercase"
              onClick={() =>
                !(
                  swiperInstance?.realIndex ===
                  swiperInstance?.slides.length - 1
                )
                  ? swiperInstance.slideNext()
                  : swiperInstance.slideTo(0)
              }
            >
              NEXT
            </div>
            <div
              className="h-9 w-9 border border-white rounded-full flex items-center justify-center group transition-all bg-black bg-opacity-10 hover:bg-white cursor-pointer"
              onClick={() => resetOverlayVisibility()}
            >
              <Image
                src="/close.svg"
                width={14}
                height={14}
                alt="Slide Up"
                className="group-hover:brightness-0"
              />
            </div>
          </Animate>
        </div>
      </div>
    </div>
  );
};

export default SwiperItemMobile;