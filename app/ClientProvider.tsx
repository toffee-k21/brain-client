"use client"
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function ClientProviders({
    children,
}: {
    children: React.ReactNode;
}) {
    const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "813721808048-0eflq5dlubmq6e6udn81b3elfqugeldj.apps.googleusercontent.com";

    return (
        <GoogleOAuthProvider clientId={googleClientId}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </GoogleOAuthProvider>
    );
}
