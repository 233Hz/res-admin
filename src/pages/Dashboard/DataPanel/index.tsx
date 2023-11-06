import React from 'react'
import { Card } from 'antd'

const DataPanel: React.FC = () => {
  return (
    <Card title='数据概览'>
      <div className='grid grid-cols-4 grid-rows-2 gap-[10px] h-[200px]'>
        {Array.from({ length: 8 }).map((_, index) => (
          <div className='bg-[#f8f8f8] p-[20px] flex flex-col justify-center' key={index}>
            <p className='text-gray-400 text-[16px]'>资源分类</p>
            <h3 className='text-green-700 text-[32px] font-bold'>6</h3>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default DataPanel
