import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_BACKEND_URL;

const useAuthStore = create(
    persist(
        (set, get) => ({
            user: null,
            token: null,
            hydrated: false,
            setAuth: (user, token) => {
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                axios.defaults.headers.common["Content-Type"] = "application/json";

                Cookies.set("token", token, { path: "/", sameSite: "Lax" });
                Cookies.set("user", JSON.stringify(user), { path: "/", sameSite: "Lax" });
                Cookies.set("role", user.role, { path: "/", sameSite: "Lax" });

                set({ user, token });
            },
            logout: () => {
                delete axios.defaults.headers.common["Authorization"];
                delete axios.defaults.headers.common["Content-Type"];

                Cookies.remove("token");
                Cookies.remove("user");
                Cookies.remove("role");

                set({ user: null, token: null });
            },
            refreshUserProfile: async () => {
                const token = get().token;
                if (!token) return;
                try {
                    const res = await axios.get(`${API_URL}/me`);
                    set({ user: res.data.data });
                } catch (err) {
                    console.error("Gagal refresh user", err);
                }
            },
        }),
        {
            name: "auth-storage",
            getStorage: () => localStorage,

            onRehydrateStorage: () => (state) => {
                const token = state?.token;
                if (token) {
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                    axios.defaults.headers.common["Content-Type"] = "application/json";
                }
                setTimeout(() => {
                    state?.setState?.({ hydrated: true });
                }, 0);
            },
        }
    )
);

export default useAuthStore;
