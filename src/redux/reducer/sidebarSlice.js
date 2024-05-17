import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openKeys: [],
  activeMenuItemKey: "",
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setOpenKeys: (state, action) => {
      state.openKeys = action.payload;
    },
    setActiveMenuItemKey: (state, action) => {
      state.activeMenuItemKey = action.payload;
    },
  },
});

export const { setOpenKeys, setActiveMenuItemKey } = sidebarSlice.actions;
export default sidebarSlice.reducer;
