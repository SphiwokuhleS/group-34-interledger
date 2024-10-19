import { SidebarProvider, SidebarTrigger } from "@/components/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        <div className="min-h-screen min-w-screen bg-gradient-to-b from-blue-100 to-white p-8">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
