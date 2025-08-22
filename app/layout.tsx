import type { Metadata } from "next";
import { UIProvider } from "@/providers/ui-provider";
import "./layout.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata: Metadata = {
    title: "MSR",
    description: "Monthly Status Report.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <UIProvider>{children}</UIProvider>
            </body>
        </html>
    );
}
