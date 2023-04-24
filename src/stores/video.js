import { create } from 'zustand';

const useVideoStore = create((set, get) => ({
  currVideo: null,
  allVideos: null,

  setState: (chapters) => {
    const firstVideo = chapters?.[0]?.videos?.[0];
    const allVideos = chapters?.map(({ videos }) => videos).flat(); // All videos in sequence

    set({ currVideo: firstVideo, allVideos });
  },
  setCurrVideo: (videoId) => {
    const video = get()?.allVideos?.find(({ _id }) => _id === videoId);

    set({ currVideo: video });
  },

  next: () => {
    const { currVideo, allVideos } = get();
    const currVideoIndex = allVideos?.findIndex(
      ({ _id }) => _id === currVideo?._id
    );

    if (currVideoIndex < allVideos.length - 1)
      set({ currVideo: allVideos[currVideoIndex + 1] });
  },
  previous: () => {
    const { currVideo, allVideos } = get();
    const currVideoIndex = allVideos?.findIndex(
      ({ _id }) => _id === currVideo?._id
    );

    if (currVideoIndex > 0) set({ currVideo: allVideos[currVideoIndex - 1] });
  },
}));

export default useVideoStore;
