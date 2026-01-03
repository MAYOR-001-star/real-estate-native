import {Account, Avatars, Client, Databases, OAuthProvider, Storage} from "appwrite";
import * as Linking from "expo-linking";
import {openAuthSessionAsync} from "expo-web-browser";

export const config = {
    // platform: "com.bama.restate",
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client()
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    // .setPlatform(config.platform!);

export const avatars = new Avatars(client)
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

export async function login() {
    try {
        const redirectUri = Linking.createURL("/"); // this now works
        const response = await account.createOAuth2Token(OAuthProvider.Google, redirectUri);
        if (!response) throw new Error("Failed to login");

        const browserResult = await openAuthSessionAsync(response.toString(), redirectUri);
        if (browserResult.type !== "success") throw new Error("Failed to login");

        const url = new URL(browserResult.url);
        const secret = url.searchParams.get("secret");
        const userId = url.searchParams.get("userId");

        if (!secret || !userId) throw new Error("Failed to login");

        await account.createSession(userId, secret);
        return true;
    } catch (err) {
        console.log("Login error", err);
        return false;
    }
}

export async function logout() {
    try {
        await account.deleteSession("current");
        return true;
    } catch (error) {
        console.log("Logout error", error);
        return false
    }
}

export async function getCurrentUser() {
    try {
        const response = await account.get();
        if (response.$id) {
            const userAvatar = avatars.getInitials(response.name);
            return {...response, avatar: userAvatar.toString()};
        }
    } catch (error) {
        console.log("Get users error", error);
        return null;
    }
}