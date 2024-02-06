import { useQuery } from "react-query"

import { apiClient } from "@/api"
import { TeamMemberProps } from "@/types"

// GET all team members
export async function all() {
  const res = await apiClient.get("/about/team.php")
  return res.data
}

export function useAll() {
  return useQuery<TeamMemberProps[]>(["team-members"], () => all(), {
    retry: 2,
  })
}
