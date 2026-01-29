// @ts-ignore;
import React from 'react';

export function ServiceNetwork() {
  const networkItems = [{
    icon: 'ℹ️',
    label: '关于向前看',
    color: 'bg-blue-500'
  }, {
    icon: 'ℹ️',
    label: '关于向前看',
    color: 'bg-blue-500'
  }, {
    icon: '📍',
    label: '服务网点',
    color: 'bg-blue-500'
  }, {
    icon: '🎓',
    label: '先前看培训',
    color: 'bg-orange-500'
  }];
  return <div className="mb-4">
      <h3 className="text-center text-lg font-bold mb-2">向前看</h3>
      <div className="flex justify-around">
        {networkItems.map((item, index) => <div key={index} className={`${item.color} p-3 rounded-lg text-center text-white`}>
            <div className="text-2xl mb-1">{item.icon}</div>
            <div className="text-xs">{item.label}</div>
          </div>)}
      </div>
    </div>;
}