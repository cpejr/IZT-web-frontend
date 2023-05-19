import { create } from 'zustand';

const useVideoStore = create((set, get) => ({
  currVideoId: null,
  allVideos: null,

  setState: (chapters) => {
    const allVideos = chapters?.map(({ videos }) => videos).flat(); // All videos in sequence
    const firstVideo = allVideos?.[0];

    set({ currVideoId: firstVideo._id, allVideos });
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
