import { useQuery } from "react-query"

import { apiClient } from "@/api"
import { AwardProps } from "@/types"

// GET all services
export async function all() {
  const res = await apiClient.get("/about/awards.php")
  return res.data
}

export function useAll() {
  return useQuery<AwardProps[]>(["awards"], () => all(), {
    retry: 2,
  })
}
