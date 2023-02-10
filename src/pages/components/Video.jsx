const Video = () => {
  return (
    <>
      <iframe
        src="https://www.youtube.com/embed/bcwXP-eqZcU?autoplay=1&controls=1&mute=1&loop=1&modestbranding=1&showinfo=0"
        title="YouTube video player"
        className="w-full h-full aspect-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      />
    </>
  );
};

export default Video;
