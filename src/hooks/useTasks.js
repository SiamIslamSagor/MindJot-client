import { useQuery } from "@tanstack/react-query";
import { useAxiosPublic } from "./useAxiosPublic";
import useDataContext from "./useDataContext";

export const useTasks = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useDataContext();

  const {
    data: allTasks = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["allTasks"],
    queryFn: () =>
      axiosPublic.get(`/all-task/${user && user?.email}`).then(res => {
        return res.data;
      }),
    staleTime: 1000 * 10,
  });
  return { allTasks, isLoading, isError, refetch };
};
