export const TickerSection = () => {
    return (
        <div className="w-full bg-slate-900 text-slate-300 py-1.5 overflow-hidden whitespace-nowrap text-xs font-medium relative border-b border-slate-800">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-slate-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-slate-900 to-transparent z-10"></div>
            <div className="flex animate-ticker gap-8 items-center min-w-max">
                <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-green-500"></span> Someone just booked a 5-day trip to Bali</span>
                <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-green-500"></span> 2 tickets to Paris confirmed 3 mins ago</span>
                <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-green-500"></span> Family package to Maldives sold out for Dec</span>
                <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-green-500"></span> Someone just booked a 7-day tour in Japan</span>
                <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-green-500"></span> Last-minute deal to Rome claimed</span>
                <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-green-500"></span> Someone just booked a 5-day trip to Bali</span>
                <span className="flex items-center gap-1.5"><span className="size-1.5 rounded-full bg-green-500"></span> 2 tickets to Paris confirmed 3 mins ago</span>
            </div>
        </div>
    );
};
