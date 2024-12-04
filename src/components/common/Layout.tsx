import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
    children: React.ReactNode;
  }
  
  export const Layout = ({ children }: LayoutProps) => {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </div>
    );
  };