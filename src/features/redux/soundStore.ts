import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Audio } from "expo-av";
import { WritableDraft } from "immer/dist/internal";
import React from "react";
import { ISoundStoreState } from "./types/soundStore";

const initialState: ISoundStoreState = {
  sound: new Audio.Sound(),
};

export const playSound = createAsyncThunk("playSound", async () => {
  if (!initialState.sound?._loaded) {
    await initialState.sound?.loadAsync(
      require("../../core/sounds/track06.mp3")
    );
  }
  try {
    await initialState.sound?.playAsync();
    console.log('playing sound')
  } catch (e) {
    console.log(e);
  }
});

const soundStore = createSlice({
  name: "sounds",
  initialState,
  reducers: {
    pauseSound: (state) => {
      if (state.sound && state.sound._loaded) {
        state.sound.pauseAsync();
      }
    },
    stopSound: (state) => {
      if (state.sound && state.sound._loaded) {
        state.sound.stopAsync();
        state.sound.unloadAsync();
      }
    },
  },
  extraReducers: ({ addCase }) => {},
});

export const { pauseSound,stopSound } = soundStore.actions;

export default soundStore.reducer;
