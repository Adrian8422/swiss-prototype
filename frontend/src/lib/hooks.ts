import useSWR, { mutate } from "swr";
import { fetchAPI } from "./api.ts";

export function useGetAllTasks() {
  const { data, error, isLoading } = useSWR("/tasks", fetchAPI);

  return {
    data,
    error,
    isLoading,
    refreshTasks: () => mutate("/tasks"),
  };
}
