"use client";

import { useState } from "react";
import { MaterialSymbol } from "@/components/ui/material-symbol";
import RichTextEditor from "@/components/RichTextEditor";
import { cn } from "@/lib/utils";

interface ItineraryItem {
    day: number;
    title: string;
    content: string;
    proTip?: string;
}

interface ItineraryManagerProps {
    value: ItineraryItem[];
    onChange: (value: ItineraryItem[]) => void;
}

export default function ItineraryManager({ value, onChange }: ItineraryManagerProps) {
    const [expandedDay, setExpandedDay] = useState<number | null>(0);

    const addDay = () => {
        const nextDay = value.length + 1;
        onChange([...value, { day: nextDay, title: "", content: "", proTip: "" }]);
        setExpandedDay(value.length);
    };

    const removeDay = (index: number) => {
        const newValue = value
            .filter((_, i) => i !== index)
            .map((item, i) => ({ ...item, day: i + 1 }));
        onChange(newValue);
    };

    const updateDay = (index: number, field: keyof ItineraryItem, val: any) => {
        const newValue = [...value];
        newValue[index] = { ...newValue[index], [field]: val };
        onChange(newValue);
    };

    const moveDay = (index: number, direction: 'up' | 'down') => {
        if ((direction === 'up' && index === 0) || (direction === 'down' && index === value.length - 1)) return;

        const newValue = [...value];
        const targetIndex = direction === 'up' ? index - 1 : index + 1;
        [newValue[index], newValue[targetIndex]] = [newValue[targetIndex], newValue[index]];

        // Reset day numbers
        const finalValue = newValue.map((item, i) => ({ ...item, day: i + 1 }));
        onChange(finalValue);
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Itinerary Planner</h3>
                <button
                    type="button"
                    onClick={addDay}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors"
                >
                    <MaterialSymbol icon="add" size={18} />
                    Add Day
                </button>
            </div>

            {value.length === 0 ? (
                <div className="p-10 border-2 border-dashed border-gray-100 rounded-2xl text-center text-gray-400">
                    <MaterialSymbol icon="event_note" size={48} className="mb-2 opacity-20" />
                    <p>No itinerary days added yet. Start by adding Day 1.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {value.map((item, index) => (
                        <div key={index} className={cn(
                            "bg-gray-50 rounded-2xl border transition-all duration-200",
                            expandedDay === index ? "border-blue-200 ring-2 ring-blue-500/5 shadow-md" : "border-gray-100"
                        )}>
                            <div
                                className="px-6 py-4 bg-white border-b border-gray-100 flex items-center justify-between cursor-pointer group"
                                onClick={() => setExpandedDay(expandedDay === index ? null : index)}
                            >
                                <div className="flex items-center gap-4 flex-1">
                                    <span className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-colors",
                                        expandedDay === index ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
                                    )}>
                                        {item.day}
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Day Title (e.g. Arrival in Kathmandu)"
                                        value={item.title}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            updateDay(index, 'title', e.target.value);
                                        }}
                                        onClick={(e) => e.stopPropagation()}
                                        className="bg-transparent border-none outline-none font-bold text-gray-900 placeholder:text-gray-300 w-full max-w-md"
                                    />
                                </div>
                                <div className="flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                                    <button
                                        type="button"
                                        onClick={() => moveDay(index, 'up')}
                                        disabled={index === 0}
                                        className="p-1.5 text-gray-400 hover:text-blue-600 disabled:opacity-30"
                                    >
                                        <MaterialSymbol icon="arrow_upward" size={18} />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => moveDay(index, 'down')}
                                        disabled={index === value.length - 1}
                                        className="p-1.5 text-gray-400 hover:text-blue-600 disabled:opacity-30"
                                    >
                                        <MaterialSymbol icon="arrow_downward" size={18} />
                                    </button>
                                    <div className="w-px h-4 bg-gray-200 mx-1" />
                                    <button
                                        type="button"
                                        onClick={() => removeDay(index)}
                                        className="p-1.5 text-red-400 hover:text-red-600 transition-colors"
                                    >
                                        <MaterialSymbol icon="delete" size={18} />
                                    </button>
                                    <button
                                        type="button"
                                        className="p-1.5 text-gray-400 group-hover:text-blue-600"
                                    >
                                        <MaterialSymbol icon={expandedDay === index ? "expand_less" : "expand_more"} size={24} />
                                    </button>
                                </div>
                            </div>

                            {expandedDay === index && (
                                <div className="p-6 space-y-6 animate-in slide-in-from-top-2 duration-200">
                                    <div>
                                        <label className="block text-[10px] uppercase font-bold text-gray-400 mb-2 tracking-wider">Day Activities & Schedule</label>
                                        <RichTextEditor
                                            value={item.content}
                                            onChange={(val) => updateDay(index, 'content', val)}
                                            placeholder="Detailed description of activities..."
                                        />
                                    </div>
                                    <div className="pt-4 border-t border-gray-100">
                                        <label className="block text-[10px] uppercase font-bold text-gray-400 mb-1 tracking-wider flex items-center gap-1">
                                            <MaterialSymbol icon="lightbulb" size={14} className="text-amber-500" />
                                            Professional Tip
                                        </label>
                                        <input
                                            type="text"
                                            value={item.proTip || ""}
                                            onChange={(e) => updateDay(index, 'proTip', e.target.value)}
                                            placeholder="Expert advice for travelers on this day..."
                                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}