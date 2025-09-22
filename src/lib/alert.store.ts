import { writable } from "svelte/store";

export type AlertButton = {
  label: string;
  color?: string;
  action?: () => void;
};

export const alertStore = writable<{
  show: boolean;
  title: string;
  message: string;
  loading: boolean;
  buttons: AlertButton[];
}>({
  show: false,
  title: "Example title",
  message: "Example message",
  loading: false,
  buttons: []
});
