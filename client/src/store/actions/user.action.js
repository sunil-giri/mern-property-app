import { USER } from "../types"

export const newUser = (data) => {
  return {
      type: USER,
      payload: data
  }
}


