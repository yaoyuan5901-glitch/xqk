// @ts-ignore;
import React from 'react';

export function TabBar({
  activeTab,
  onTabChange
}) {
  const tabs = [{
    id: 'home',
    label: '首页',
    icon: '🏠'
  }, {
    id: 'shop',
    label: '商城',
    icon: '🛒'
  }, {
    id: 'health',
    label: '健康',
    icon: '❤️'
  }, {
    id: 'service',
    label: '服务',
    icon: '🔧'
  }, {
    id: 'profile',
    label: '我的',
    icon: '👤'
  }];
  return <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 z-50">
      <div className="flex justify-around">
        {tabs.map(tab => <button key={tab.id} className={`flex flex-col items-center justify-center w-full h-12 px-2 ${activeTab === tab.id ? 'text-blue-600' : 'text-gray-500'}`} onClick={() => onTabChange(tab.id)}>
            <span className="text-lg">{tab.icon}</span>
            <span className="text-xs mt-1">{tab.label}</span>
          </button>)}
      </div>
    </div>;
}