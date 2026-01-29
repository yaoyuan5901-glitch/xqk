// @ts-ignore;
import React from 'react';

export function AboutSection() {
  const aboutItems = [{
    icon: '🏥',
    label: '关于向前看'
  }, {
    icon: '🏠',
    label: '养老院'
  }, {
    icon: '🎓',
    label: '先前看培训'
  }];
  return <div className="mb-4">
      <h3 className="text-center text-lg font-bold mb-2">关于向前看</h3>
      <div className="flex justify-around">
        {aboutItems.map((item, index) => <div key={index} className="bg-blue-200 p-3 rounded-lg text-center">
            <div className="text-2xl mb-1">{item.icon}</div>
            <div className="text-sm">{item.label}</div>
          </div>)}
      </div>
    </div>;
}