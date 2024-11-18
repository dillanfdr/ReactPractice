
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk('async/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.json()
  }
)

const userWithAsyncThunkSlice = createSlice((
  name: 'userWithAsyncThunkSlice',
  initialState: { users: [], loading: false, eror: null},
  reducers: (),

  ))