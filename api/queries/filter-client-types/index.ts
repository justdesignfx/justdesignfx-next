import { useQuery } from "react-query"

import { apiClient } from "@/api"

// GET all client types
export async function all() {
  const res = await apiClient.get("/works/clientTypes.php")
  return res.data
}

export function useAll() {
  return useQuery<{ id: string; title: string }[]>(["filter-client-types"], () => all(), {
    retry: 2,
  })
}
