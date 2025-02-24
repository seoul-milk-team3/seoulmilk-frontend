import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0, // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
      staleTime: 1000 * 60 * 1, // 1분 후 데이터는 "stale"로 처리
      refetchOnWindowFocus: false, //  window에 focus를 하면 refetch가 실행되는 옵션 끄기
    },
    mutations: {
      retry: 0, // API 요청 실패시 재시도 하는 옵션 (설정값 만큼 재시도)
    },
  },
});

export default queryClient;
