import { useQuery } from "blitz"
import getCurrentUser from "app/users/queries/getCurrentUser"

export const useCurrentUser = () => {
  const [user] = useQuery(getCurrentUser, null, { suspense: false })
  return user
  //return { id: 1, name: "horsewin", email: "horsewin@gmail.com", role: "admin" }
}
