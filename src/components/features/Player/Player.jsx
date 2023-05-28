import { useCallback, useLayoutEffect, useRef, useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { toast } from 'react-toastify';

import { useSaveProgress } from '../../../hooks/query/progress';
import useAuthStore from '../../../stores/auth';
import { buildSaveProgressErrorMessage } from './Styles';

export default function Player({
  videoId,
  url,
  initialProgress,
  duration,
  config,
  ...props
}) {
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef(null);
  const userId = useAuthStore((state) => state.auth?.user?._id);
  const queryClient = useQueryClient();

  const { mutate: saveProgress } = useSaveProgress({
    onSuccess: ({ progress }) => {
      if (progress === 100) queryClient.invalidateQueries(['course']);
    },
    onError: (err) => {
      const errorMessage = buildSaveProgressErrorMessage(err);
      toast.error(errorMessage);
    },
  });

  useLayoutEffect(() => {
    const player = playerRef.current;

    return () => {
      if (!player) return;

      const progress = (player.getCurrentTime() / duration) * 100;

      // If the video progress reach 100%, it will be saved in the onEnded player event
      if (progress < 100)
        saveProgress({
          video: videoId,
          progress,
        });
    };
  }, [saveProgress, duration, userId, videoId]);

  const onReady = useCallback(() => {
    if (!isReady && initialProgress && duration) {
      const progressInSeconds = (initialProgress / 100) * duration;
      playerRef.current?.seekTo(progressInSeconds, 'seconds');
      setIsReady(true);
    }
  }, [isReady, initialProgress, duration]);

  return (
    <ReactPlayer
      ref={playerRef}
      url={url}
      width="100%"
      height="100%"
      controls
      stopOnUnmount
      onEnded={() => saveProgress({ video: videoId, progress: 100 })}
      onReady={onReady}
      config={config}
      {...props}
    />
  );
}

Player.propTypes = {
  videoId: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  initialProgress: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  config: PropTypes.object.isRequired,
};
