import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Audio } from "expo-av";
import { ISoundStoreState, IStopSoundPayload } from "./types/soundStore";
import { WritableDraft } from "immer/dist/internal";

const initialState: ISoundStoreState = {
  sound: null,
};

export const playSound = createAsyncThunk("playSound", async () => {
  console.log("Loading sound");
  const { sound } = await Audio.Sound.createAsync(
    require("../../core/sounds/track06.mp3"),
    {
      shouldPlay: true,
      isLooping: true,
    }
  );

  console.log("Playing sound");
  await sound.playAsync();
  return sound as WritableDraft<Audio.Sound>;
});

const soundStore = createSlice({
  name: "sounds",
  initialState,
  reducers: {
    stopSound: (state) => {
      state.sound?.pauseAsync();
    },
  },
  extraReducers: ({ addCase }) => {
    addCase(playSound.fulfilled, (state, action) => {
      state.sound = action.payload;
    });
  },
});

export const { stopSound } = soundStore.actions;

export default soundStore.reducer;
