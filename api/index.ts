import axios from "axios"

export const apiClient = axios.create({
  baseURL: "https://justdesignfx.com/jd-admin/services",
})
