import { apiClient } from "@/api"
import { WorkCardProps } from "@/types"
import { useQuery } from "react-query"

// GET all works
export async function all(keyword?: string, clientType?: string, service?: string) {
  const res = await apiClient.post("/works/works.php", {
    keyword,
    clientType,
    service,
  })
  return res.data
}

export function useAll(keyword?: string, clientType?: string, service?: string) {
  return useQuery<WorkCardProps[]>(["works", keyword, clientType, service], () => all(keyword, clientType, service), {
    retry: 2,
  })
}
