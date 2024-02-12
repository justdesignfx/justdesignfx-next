import { useQuery } from "react-query"

import { apiClient } from "@/api"

// GET all services
export async function all() {
  const res = await apiClient.get("/works/services.php")
  return res.data
}

export function useAll() {
  return useQuery<{ id: string; title: string }[]>(["filter-services"], () => all(), {
    retry: 2,
  })
}
