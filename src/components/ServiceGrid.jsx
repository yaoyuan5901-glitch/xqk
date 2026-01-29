// @ts-ignore;
import React from 'react';

export function ServiceGrid({
  services,
  title,
  type = 'default'
}) {
  const getServiceIcon = name => {
    const icons = {
      '住家护理': '🏠',
      '医疗护理': '🩺',
      '长护险': '🛡️',
      '康复训练': '💪',
      '就医陪诊': '🏥',
      '医院照顾': '👨‍⚕️'
    };
    return icons[name] || '📋';
  };
  return <div className="mb-4">
      <h3 className="text-center text-lg font-bold mb-2">{title}</h3>
      {type === 'button' ? <div className="flex justify-around">
          {services.map(service => <button key={service.id} className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-bold">
              {service.name}
            </button>)}
        </div> : <div className="flex justify-around">
          {services.map(service => <div key={service.id} className="text-center">
              <div className="text-2xl mb-1">{getServiceIcon(service.name)}</div>
              <div className="text-sm">{service.name}</div>
            </div>)}
        </div>}
    </div>;
}