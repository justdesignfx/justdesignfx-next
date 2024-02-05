import { useQuery } from "react-query"

import { apiClient } from "@/api"
import { WorkCardProps } from "@/types"

// GET all latest works
export async function all() {
  const res = await apiClient.get("/home/latestWorks.php")
  return res.data
}

export function useAll() {
  return useQuery<WorkCardProps[]>(["latest-works"], () => all(), {
    retry: 2,
  })
}
