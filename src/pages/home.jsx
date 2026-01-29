// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Card, CardContent, CardHeader, CardTitle, Button, Badge } from '@/components/ui';
// @ts-ignore;
import { Heart, Home as HomeIcon, Stethoscope, Shield, Dumbbell, MapPin, User } from 'lucide-react';

export default function HomePage(props) {
  const [nurses, setNurses] = useState([]);
  const [services, setServices] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [activeTab, setActiveTab] = useState('home');
  useEffect(() => {
    loadData();
  }, []);
  const loadData = async () => {
    try {
      // 加载护理员数据
      const nurseResult = await props.$w.cloud.callFunction({
        name: 'callDataSource',
        data: {
          dataSourceName: 'nurse_info',
          method: 'get'
        }
      });
      setNurses(nurseResult.result.data || []);

      // 加载服务项目数据
      const serviceResult = await props.$w.cloud.callFunction({
        name: 'callDataSource',
        data: {
          dataSourceName: 'service_items',
          method: 'get'
        }
      });
      setServices(serviceResult.result.data || []);

      // 加载机构数据
      const institutionResult = await props.$w.cloud.callFunction({
        name: 'callDataSource',
        data: {
          dataSourceName: 'institutions',
          method: 'get'
        }
      });
      setInstitutions(institutionResult.result.data || []);
    } catch (error) {
      console.error('加载数据失败:', error);
    }
  };
  const serviceIcons = {
    '住家护理': HomeIcon,
    '医疗护理': Stethoscope,
    '长护险': Shield,
    '康复训练': Dumbbell
  };
  return <div className="min-h-screen bg-gray-50 pb-20">
      {/* 顶部标题 */}
      <div className="bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold text-center">（杭州）向前看</h1>
      </div>

      <div className="p-4 space-y-6">
        {/* 服务分类 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">服务分类</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {services.filter(s => s.category === '服务').map(service => {
              const IconComponent = serviceIcons[service.name] || Heart;
              return <Button key={service.id} variant="outline" className="h-20 flex-col">
                    <IconComponent className="w-6 h-6 mb-2" />
                    <span className="text-sm">{service.name}</span>
                  </Button>;
            })}
            </div>
          </CardContent>
        </Card>

        {/* 增长项目 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">增长项目</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {services.filter(s => s.category === '增长项目').map(service => <div key={service.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">{service.name}</span>
                  <Badge variant="secondary">推荐</Badge>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* 护理员名片 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">护理员名片</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {nurses.slice(0, 2).map(nurse => <div key={nurse.id} className="flex items-center space-x-4 p-3 bg-white rounded-lg border">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{nurse.name}</h3>
                    <p className="text-sm text-gray-600">身高 {nurse.height}米 | 体重 {nurse.weight}公斤</p>
                    <p className="text-xs text-gray-500">{nurse.specialty}</p>
                  </div>
                </div>)}
            </div>
          </CardContent>
        </Card>

        {/* 实体机构 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">实体机构</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {institutions.map(institution => <div key={institution.id} className="flex items-center space-x-3 p-3 bg-white rounded-lg border">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <div>
                    <h4 className="font-medium">{institution.name}</h4>
                    <p className="text-sm text-gray-600">{institution.type}</p>
                  </div>
                </div>)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 底部导航栏 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-2">
        <div className="flex justify-around">
          {['首页', '商城', '健康', '服务', '我的'].map((item, index) => <Button key={index} variant="ghost" className="flex-col h-12">
              <span className="text-xs">{item}</span>
            </Button>)}
        </div>
      </div>
    </div>;
}