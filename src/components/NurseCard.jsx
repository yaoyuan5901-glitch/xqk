// @ts-ignore;
import React from 'react';

export function NurseCard({
  nurse
}) {
  return <div className="border border-gray-200 rounded-lg p-3 bg-white mb-3">
      <div className="flex items-center mb-2">
        <img src={nurse.avatar_url || "https://images.placeholders.dev/60x60/?text=头像"} alt={nurse.name} className="rounded-full w-15 h-15 mr-3" />
        <div>
          <div className="font-bold text-base">{nurse.name}</div>
          <div className="text-sm text-gray-600">身高: {nurse.height}米，体重: {nurse.weight}公斤</div>
          <div className="text-sm text-gray-600">从业{nurse.experience}年</div>
        </div>
      </div>
      <div className="text-sm text-green-600">擅长: {nurse.specialty}</div>
      <div className="text-sm text-blue-600">性格特点: {nurse.personality}</div>
    </div>;
}