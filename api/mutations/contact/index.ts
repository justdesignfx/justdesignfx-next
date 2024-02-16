import { apiClient } from "@/api"
import { ContactForm } from "@/types"
import { useMutation } from "react-query"

// POST contactForm
async function submitContact(values: ContactForm) {
  const res = await apiClient.post<{ success: boolean; message: string }>(
    "/letstalk/contact.php",
    { ...values },
    {
      headers: {
        ContentType: "application/json",
        Accept: "application/json",
      },
    }
  )
  return res.data
}

export function useContact() {
  return useMutation(submitContact, {
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
