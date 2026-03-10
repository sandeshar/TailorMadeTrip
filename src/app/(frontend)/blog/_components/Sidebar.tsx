import React from 'react';
import Link from 'next/link';
import { MaterialSymbol } from "@/components/ui/material-symbol";

interface SidebarProps {
    toc: { id: string; text: string; level: number }[];
}

const Sidebar: React.FC<SidebarProps> = ({ toc }) => {
    return (
        <aside className="sticky top-24 h-fit hidden lg:block">
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-gray-100 bg-slate-50/50 flex items-center gap-2">
                    <MaterialSymbol icon="format_list_bulleted" size={20} className="text-primary" />
                    <h3 className="font-bold text-[#0e121b] text-sm uppercase tracking-wider font-lexend">In this article</h3>
                </div>
                <nav className="p-4 max-h-[calc(100vh-250px)] overflow-y-auto">
                    {toc.length === 0 ? (
                        <p className="text-xs text-slate-400 italic py-2">No headings found in this article.</p>
                    ) : (
                        <ul className="space-y-1">
                            {toc.map((item, index) => (
                                <li key={index} style={{ paddingLeft: `${(item.level - 1) * 12}px` }}>
                                    <Link
                                        href={`#${item.id}`}
                                        className="block py-1.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 px-2 rounded-lg transition-all line-clamp-2"
                                    >
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </nav>
            </div>

            <div className="mt-6 bg-primary/5 rounded-xl border border-primary/10 p-5">
                <h4 className="font-bold text-primary text-sm mb-2 flex items-center gap-2">
                    <MaterialSymbol icon="help" size={18} />
                    Need Assistance?
                </h4>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    Have questions about this topic or need more travel information?
                </p>
                <Link
                    href="/contact"
                    className="w-full py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                >
                    <MaterialSymbol icon="chat" size={16} />
                    Contact Support
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;
