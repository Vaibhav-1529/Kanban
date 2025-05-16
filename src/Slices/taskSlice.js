import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  columns: {},
  isDark: false,
  currentCol: "",
};
const taskSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addColumn: (state, action) => {
      if (!state.columns[action.payload.trim()]) {
        state.columns[action.payload.trim()] = [];
      }
    },
    addTask: (state, action) => {
      const { title, description, columnName } = action.payload;
      if (
        title?.trim() &&
        description?.trim() &&
        columnName?.trim() &&
        state.columns[columnName]
      ) {
        state.columns[columnName].push({ title, description });
      } else {
        console.warn("Invalid task or column not found:", action.payload);
      }
    },
    edittask: (state, action) => {
      const { colkey, index, item } = action.payload;
      if (state.columns[colkey] && state.columns[colkey][index]) {
        state.columns[colkey][index] = item;
      }
    },
    setcurrentCol: (state, action) => {
      state.currentCol = action.payload;
    },
handleDragEnd: (state, action) => {
  const { source, destination } = action.payload;

  if (!destination) return;
  const sourceCol = state.columns[source.droppableId];
  const destCol = state.columns[destination.droppableId];
  const draggedItem = sourceCol[source.index];

  sourceCol.splice(source.index, 1);

  if (source.droppableId === destination.droppableId) {
    sourceCol.splice(destination.index, 0, draggedItem);
  } else {
    destCol.splice(destination.index, 0, draggedItem);
  }
}

    
  },
});
export const { addColumn, addTask, edittask, setcurrentCol,handleDragEnd } =
  taskSlice.actions;
export default taskSlice.reducer;
