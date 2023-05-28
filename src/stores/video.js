import { create } from 'zustand';

const useVideoStore = create((set, get) => ({
  currVideoId: null,
  allVideos: null,

  setState: (course) => {
    const allVideos = course?.chapters?.map(({ videos }) => videos).flat(); // All videos in sequence

    set({ currVideoId: course?.lastWatchedVideo, allVideos });
  },
  setCurrVideoId: (videoId) => set({ currVideoId: videoId }),

  next: () => {
    const { currVideoId, allVideos } = get();
    const currVideoIndex = allVideos?.findIndex(
      ({ _id }) => _id === currVideoId
    );

    if (currVideoIndex < allVideos.length - 1)
      set({ currVideoId: allVideos[currVideoIndex + 1]?._id });
  },
  previous: () => {
    const { currVideoId, allVideos } = get();
    const currVideoIndex = allVideos?.findIndex(
      ({ _id }) => _id === currVideoId
    );

    if (currVideoIndex > 0)
      set({ currVideoId: allVideos[currVideoIndex - 1]?._id });
  },
}));

export default useVideoStore;
