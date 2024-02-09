import { apiClient } from "@/api"
import { useMutation } from "react-query"

// POST subscribe email
async function submitSubscribe({ email }: { email: string }) {
  const res = await apiClient.post<{ success: boolean; message: string }>(
    "/home/subscribe.php",
    { email },
    {
      headers: {
        ContentType: "application/json",
        Accept: "application/json",
      },
    }
  )
  return res.data
}

export function useSubscribe() {
  return useMutation(submitSubscribe, {
    onMutate: (variables) => {
      // console.log(variables)
    },
    onError: (err) => {
      console.log(`error`, err)
    },
    onSuccess: (res) => {
      res
    },
    onSettled: (res) => {
      res
    },
  })
}
