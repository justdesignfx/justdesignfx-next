import { useQuery } from "react-query"

import { apiClient } from "@/api"
import { ServiceProps } from "@/types"

// GET all services
export async function all() {
  const res = await apiClient.get("/about/servicesCards.php")
  return res.data
}

export function useAll() {
  return useQuery<ServiceProps[]>(["services"], () => all(), {
    retry: 2,
  })
}
