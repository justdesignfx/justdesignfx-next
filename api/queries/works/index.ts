import { useQuery } from "react-query"

import { apiClient } from "@/api"
import { WorkCardProps } from "@/types"

// GET all works
export async function all() {
  const res = await apiClient.get("/works/works.php")
  return res.data
}

export function useAll() {
  return useQuery<WorkCardProps[]>(["works"], () => all(), {
    retry: 2,
  })
}
