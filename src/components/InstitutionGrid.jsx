// @ts-ignore;
import React from 'react';

export function InstitutionGrid({
  institutions
}) {
  const getInstitutionIcon = name => {
    const icons = {
      '护理站': '🏥',
      '养老院': '🏠',
      '长照&日托': '👵'
    };
    return icons[name] || '🏢';
  };
  return <div className="mb-4">
      <h3 className="text-center text-lg font-bold mb-2">我们的实体机构</h3>
      <div className="flex justify-around">
        {institutions.map(institution => <button key={institution.id} className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm font-bold">
            {institution.name}
          </button>)}
      </div>
    </div>;
}