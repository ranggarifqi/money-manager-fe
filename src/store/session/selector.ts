import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const sltSession = (state: RootState) => {
  return state.session;
};

export const sltCredential = createSelector(sltSession, (session) => {
  return session.credential;
});

export const sltAuthToken = createSelector(sltSession, (session) => {
  return session.authToken;
});

export const sltSessionError = createSelector(sltSession, (session) => {
  return session.error;
});

export const sltIsLoggedIn = createSelector(sltCredential, (credential) => {
  return !!credential;
});
