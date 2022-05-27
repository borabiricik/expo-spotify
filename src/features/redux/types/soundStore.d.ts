import { Audio } from "expo-av";


export interface ISoundStoreState {
  sound: Audio.Sound | null | Audio.Sound;
}

export interface IStopSoundPayload {
  sound: Audio.Sound | null;
}
