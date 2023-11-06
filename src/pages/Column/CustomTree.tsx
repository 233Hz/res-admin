import React from 'react'
import { Tree } from 'antd'
import type { DataNode } from 'antd/es/tree'

const treeData: DataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          { title: 'leaf', key: '0-0-0-0' },
          {
            title: (
              <>
                <div>multiple line title</div>
                <div>multiple line title</div>
              </>
            ),
            key: '0-0-0-1'
          },
          { title: 'leaf', key: '0-0-0-2' }
        ]
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: 'leaf', key: '0-0-1-0' }]
      },
      {
        title: 'parent 1-2',
        key: '0-0-2',

        children: [
          { title: 'leaf', key: '0-0-2-0' },
          {
            title: 'leaf',
            key: '0-0-2-1'
          }
        ]
      }
    ]
  },
  {
    title: 'parent 2',
    key: '0-1',
    children: [
      {
        title: 'parent 2-0',
        key: '0-1-0',
        children: [
          { title: 'leaf', key: '0-1-0-0' },
          { title: 'leaf', key: '0-1-0-1' }
        ]
      }
    ]
  }
]

const ColumnListTree: React.FC = () => {
  const onSelect = (selectedKeys: React.Key[], info: any) => {
    console.log('selected', selectedKeys, info)
  }

  return (
    <Tree
      showLine={{ showLeafIcon: true }}
      defaultExpandedKeys={['0-0-0']}
      onSelect={onSelect}
      treeData={treeData}
    />
  )
}

export default ColumnListTree
