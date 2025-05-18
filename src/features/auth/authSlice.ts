import { create } from 'zustand';

/**
 * UserState interface represents the structure of a user object.
 *
 * It's the TypeScript counterpart for the PublicUser struct in rust.
 */
export interface UserState {
  // The user ID
  id: string;
  // The username of the user
  username: string;
  // The first name of the user
  first_name: string;
  // The last name of the user
  last_name: string;
  // The phone number of the user (optional)
  phone: string | null;
  // The email address of the user
  email: string;
  // The role of the user (e.g., admin, customer, employee)
  role: string;
  // The address of the user (optional)
  address: string | null;
  // The timestamp when the user was created
  created_at: Date;
}

export interface AuthSlice {
  /**
   * The user object containing user information.
   * @type {UserState | null}
   */
  user: UserState | null;
  /**
   * Sets the user object in the state.
   * @param user The user object to set in the state
   * @returns void
   */
  setUser: (user: UserState) => void;
  /**
   * Resets the user object in the state to null.
   * @returns void
   */
  resetUser: () => void;
}

export const useAuth = create<AuthSlice>((set) => ({
  user: null,
  setUser: (user: UserState) =>
    set(() => ({
      user: user,
    })),
  resetUser: () => set(() => ({ user: null })),
}));
