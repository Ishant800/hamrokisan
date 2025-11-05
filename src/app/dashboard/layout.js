import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Dashboard | My App",
  description: "User dashboard",
};

export default function DashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-gray-50">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "#333",
              color: "#fff",
              borderRadius: "10px",
            },
          }}
        />
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
