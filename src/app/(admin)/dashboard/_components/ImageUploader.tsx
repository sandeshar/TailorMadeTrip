"use client";

import { useState, useRef } from "react";
import { toast } from "react-hot-toast";

interface ImageUploaderProps {
    value: string | string[];
    onChange: (url: any) => void;
    label?: string;
    description?: string;
    multiple?: boolean;
}

export default function ImageUploader({ value, onChange, label, description, multiple }: ImageUploaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"upload" | "url">("upload");
    const [urlInput, setUrlInput] = useState("");
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const filesToUpload = Array.from(files);
        setIsUploading(true);

        try {
            const uploadedUrls: string[] = [];

            for (const file of filesToUpload) {
                // Basic validation
                if (!file.type.startsWith("image/")) {
                    toast.error(`"${file.name}" is not an image file`);
                    continue;
                }

                if (file.size > 5 * 1024 * 1024) { // 5MB limit
                    toast.error(`"${file.name}" is too large (max 5MB)`);
                    continue;
                }

                const formData = new FormData();
                formData.append("file", file);

                const response = await fetch("/api/media/upload", {
                    method: "POST",
                    body: formData,
                });

                const data = await response.json();

                if (!response.ok) {
                    toast.error(`Failed to upload "${file.name}": ${data.error}`);
                    continue;
                }

                uploadedUrls.push(data.url);
            }

            if (uploadedUrls.length > 0) {
                if (multiple && Array.isArray(value)) {
                    onChange([...value, ...uploadedUrls]);
                } else {
                    onChange(uploadedUrls[0]);
                }
                toast.success(uploadedUrls.length > 1 ? `${uploadedUrls.length} images uploaded` : "Image uploaded successfully");
            }

            setIsOpen(false);
        } catch (error: any) {
            console.error("Upload error:", error);
            toast.error(error.message || "Failed to upload images");
        } finally {
            setIsUploading(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const handleUrlSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!urlInput.trim()) return;

        if (multiple && Array.isArray(value)) {
            onChange([...value, urlInput]);
        } else {
            onChange(urlInput);
        }

        setIsOpen(false);
        setUrlInput("");
        toast.success("Image added");
    };

    const removeImage = (urlToRemove?: string) => {
        if (multiple && Array.isArray(value)) {
            onChange(value.filter(url => url !== urlToRemove));
        } else {
            onChange("");
        }
        toast.success("Image removed");
    };

    const renderPreview = (url: string) => (
        <div key={url} className="relative h-11 w-11 rounded-lg overflow-hidden border border-gray-200 bg-white group shrink-0">
            <img
                src={url}
                alt="Preview"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button
                    type="button"
                    onClick={() => removeImage(url)}
                    className="w-8 h-8 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors flex items-center justify-center"
                    title="Remove"
                >
                    <span className="material-symbols-outlined text-sm text-white">delete</span>
                </button>
            </div>
        </div>
    );

    const hasValue = multiple ? (Array.isArray(value) && value.length > 0) : !!value;

    return (
        <div className="space-y-1.5">
            {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}

            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {/* Mini Previews */}
                <div className="flex items-center gap-2 shrink-0">
                    {multiple && Array.isArray(value) ? (
                        value.map(url => renderPreview(url))
                    ) : (
                        !multiple && typeof value === 'string' && value ? renderPreview(value) : null
                    )}

                    {!hasValue && (
                        <div className="h-11 w-11 rounded-lg border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center text-gray-400 shrink-0">
                            <span className="material-symbols-outlined text-xl">image</span>
                        </div>
                    )}
                </div>

                {/* Main Action Field - Looks like an input */}
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="min-w-[140px] flex-1 flex items-center justify-between px-4 h-11 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-500 hover:bg-gray-100 hover:border-blue-400 transition-all outline-none"
                >
                    <span className="truncate">
                        {hasValue ? (multiple ? `Add More (${(value as string[]).length})` : "Update Image") : "Select image..."}
                    </span>
                    <span className="material-symbols-outlined text-gray-400">
                        {hasValue ? "sync" : "add_photo_alternate"}
                    </span>
                </button>
            </div>

            {description && <p className="text-[11px] text-gray-400 mt-1">{description}</p>}

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
                    <div
                        className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden animate-scaleUp"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                            <h3 className="text-base font-bold text-gray-900">Add Image</h3>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-full transition-all"
                            >
                                <span className="material-symbols-outlined text-xl">close</span>
                            </button>
                        </div>

                        <div className="p-5">
                            {/* Tabs */}
                            <div className="flex bg-gray-100 p-1 rounded-lg mb-4">
                                <button
                                    onClick={() => setActiveTab("upload")}
                                    className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === "upload"
                                        ? "bg-white text-blue-600 shadow-sm"
                                        : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">upload</span>
                                    Upload
                                </button>
                                <button
                                    onClick={() => setActiveTab("url")}
                                    className={`flex-1 flex items-center justify-center gap-2 py-1.5 text-xs font-medium rounded-md transition-all ${activeTab === "url"
                                        ? "bg-white text-blue-600 shadow-sm"
                                        : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-[18px]">link</span>
                                    Image URL
                                </button>
                            </div>

                            {activeTab === "upload" ? (
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center gap-3 transition-all cursor-pointer ${isUploading ? "pointer-events-none opacity-50" : "hover:border-blue-400 hover:bg-blue-50/30"
                                        } border-gray-200`}
                                >
                                    <input
                                        type="file"
                                        className="hidden"
                                        ref={fileInputRef}
                                        accept="image/*"
                                        multiple={multiple}
                                        onChange={handleFileChange}
                                    />
                                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                        {isUploading ? (
                                            <div className="animate-spin rounded-full h-6 w-6 border-2 border-blue-600 border-t-transparent" />
                                        ) : (
                                            <span className="material-symbols-outlined text-2xl">cloud_upload</span>
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <p className="text-xs font-semibold text-gray-900">
                                            {isUploading ? "Processing..." : "Click to upload file"}
                                        </p>
                                        <p className="text-[10px] text-gray-500 mt-0.5">PNG, JPG up to 5MB</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1.5">Image Source URL</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">link</span>
                                            <input
                                                type="url"
                                                required
                                                placeholder="https://images.unsplash.com/..."
                                                value={urlInput}
                                                onChange={(e) => setUrlInput(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter') {
                                                        e.preventDefault();
                                                        handleUrlSubmit(e as any);
                                                    }
                                                }}
                                                className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={handleUrlSubmit}
                                        className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-sm"
                                    >
                                        Apply URL
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

