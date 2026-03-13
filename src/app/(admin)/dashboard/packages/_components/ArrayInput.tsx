"use client";

import { useState } from "react";
import { MaterialSymbol } from "@/components/ui/material-symbol";

interface ArrayInputProps {
    value: string[];
    onChange: (value: string[]) => void;
    placeholder?: string;
    label?: string;
}

export default function ArrayInput({ value, onChange, placeholder, label }: ArrayInputProps) {
    const [inputValue, setInputValue] = useState("");

    const addItem = () => {
        if (inputValue.trim() && !value.includes(inputValue.trim())) {
            onChange([...value, inputValue.trim()]);
            setInputValue("");
        }
    };

    const removeItem = (itemToRemove: string) => {
        onChange(value.filter((item) => item !== itemToRemove));
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addItem();
        }
    };

    return (
        <div className="space-y-3">
            {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
            <div className="flex gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder || "Add item..."}
                    className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                />
                <button
                    type="button"
                    onClick={addItem}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <MaterialSymbol icon="add" size={20} />
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                {value.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100 group"
                    >
                        {item}
                        <button
                            type="button"
                            onClick={() => removeItem(item)}
                            className="text-blue-400 hover:text-red-500 transition-colors"
                        >
                            <MaterialSymbol icon="close" size={14} />
                        </button>
                    </div>
                ))}
                {value.length === 0 && (
                    <span className="text-gray-400 text-xs italic">No items added yet.</span>
                )}
            </div>
        </div>
    );
}
