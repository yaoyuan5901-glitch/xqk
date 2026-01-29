// @ts-ignore;
import React from 'react';
// @ts-ignore;
import { Button } from '@/components/ui';

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
  return <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2 z-50">
      <div className="flex justify-around">
        {tabs.map(tab => <Button key={tab.id} variant={activeTab === tab.id ? "default" : "ghost"} className="flex-col h-12 min-w-0 px-2" onClick={() => onTabChange(tab.id)}>
            <span className="text-lg">{tab.icon}</span>
            <span className="text-xs mt-1">{tab.label}</span>
          </Button>)}
      </div>
    </div>;
}