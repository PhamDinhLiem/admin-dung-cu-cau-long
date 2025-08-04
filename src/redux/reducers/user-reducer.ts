import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: any;
  token: string;
}

const initialState: UserState = {
  user: null,
  token: "",
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setOnUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setOnToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const { setOnUser, setOnToken } = UserSlice.actions;
export default UserSlice.reducer;
