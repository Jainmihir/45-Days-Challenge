import React from "react";

function HistoryCard({ urlNumber, originalUrl, shortenedUrl, clickCount }) {
    return (
        <div className="bg-pink-100 shadow-md rounded-lg mt-4">
            <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-500 text-sm">URL #{urlNumber}</span>
                    <span className="text-xs text-gray-400">Clicks: {clickCount}</span>
                </div>
                <div className="mb-1">
                    <p className="text-gray-800 text-xs truncate">{originalUrl}</p>
                </div>
                <div>
                    <a href={shortenedUrl} className="text-blue-500 hover:underline text-xs block">
                        {shortenedUrl}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default HistoryCard;
