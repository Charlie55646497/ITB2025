import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
        
        
        <div className="flex">
            <div className="w-1/4 bg-green-400 h-full"></div>
            <div className="bg-white-600 w-3/4 text-gray-500"> {children}</div>
        </div>
       
        
       
        </>
           
    );
}