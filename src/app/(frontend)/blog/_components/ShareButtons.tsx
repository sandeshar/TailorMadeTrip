'use client';

import React from 'react';
import { MaterialSymbol } from "@/components/ui/material-symbol";
import { toast } from 'react-hot-toast';

interface ShareButtonsProps {
    title: string;
    url: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title, url }) => {
    const shareOptions = [
        {
            name: 'Facebook',
            icon: 'facebook',
            color: 'text-blue-600 hover:bg-blue-50',
            onClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        },
        {
            name: 'Twitter',
            icon: 'p3', // Use a generic share icon or custom X icon if available
            color: 'text-sky-500 hover:bg-sky-50',
            onClick: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
        },
        {
            name: 'LinkedIn',
            icon: 'link', 
            color: 'text-blue-700 hover:bg-blue-50',
            onClick: () => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank')
        },
        {
            name: 'Copy Link',
            icon: 'content_copy',
            color: 'text-gray-600 hover:bg-gray-50',
            onClick: async () => {
                try {
                    await navigator.clipboard.writeText(url);
                    toast.success('Link copied to clipboard!');
                } catch (err) {
                    toast.error('Failed to copy link');
                }
            }
        }
    ];

    return (
        <div className="flex flex-wrap gap-2">
            {shareOptions.map((option) => (
                <button
                    key={option.name}
                    onClick={option.onClick}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-100 transition-colors text-xs font-medium ${option.color}`}
                    title={`Share on ${option.name}`}
                >
                    <MaterialSymbol icon={option.icon} size={16} />
                    <span>{option.name}</span>
                </button>
            ))}
        </div>
    );
};

export default ShareButtons;
