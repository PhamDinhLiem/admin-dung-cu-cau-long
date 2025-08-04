import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QuanLyState {
  onQuanLy: string;
  loading: boolean;
}

const initialState: QuanLyState = {
  onQuanLy: "trang-chu",
  loading: false,
};

const quanLySlice = createSlice({
  name: "quanly",
  initialState,
  reducers: {
    setOnQuanLy: (state, action: PayloadAction<string>) => {
      state.onQuanLy = action.payload;
    },

    setLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { setOnQuanLy, setLoading } = quanLySlice.actions;
export default quanLySlice.reducer;
