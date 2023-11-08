import React from 'react'
import { Card } from 'antd'
import { SendOutlined } from '@ant-design/icons'

const FastPanel: React.FC = () => {
  return (
    <Card title="快捷入口">
      <div className="grid grid-cols-5 grid-rows-2 gap-[10px] h-[200px]">
        {Array.from({ length: 10 }).map((_, index) => {
          return (
            <div key={index} className="flex flex-col gap-[4px]">
              <div className="bg-[#f2f2f2] flex justify-center items-center flex-1">
                <SendOutlined style={{ fontSize: '24px' }} />
              </div>
              <p className="text-center text-[16px] font-medium">部门</p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default FastPanel
