/* eslint-disable import/prefer-default-export */
// import { useQuery } from '@tanstack/react-query';

// import {} from '../../services/api';
// import useAuthStore from '../../stores/auth';
// import { getIsLoggedIn, removeIsLoggedIn } from '../../utils/isLoggedIn';

// export function useRefreshToken({
//   onSuccess = () => {},
//   onError = (err) => {
//     removeIsLoggedIn(); // In case the user did not logout and the cookie expire
//     console.error(err);
//   },
// } = {}) {
//   const { auth } = useAuthStore();

//   return useQuery({
//     queryKey: ['refresh'],
//     queryFn: refresh,
//     onError,
//     onSuccess,
//     enabled: !!getIsLoggedIn() && !auth,
//   });
// }
