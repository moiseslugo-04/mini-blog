'use client'

import { Card } from '@/components/ui/card'
import { Info } from 'lucide-react'
import { TagList } from './TagList'
import { TagForm } from './TagForm'
import { TagDTO } from '@features/tags/types'
import { useTag } from '../hooks/useTag'

interface TagManagerProps {
  availableTags?: TagDTO[]
  maxTags?: number
  selectedTags: { name: string; displayName: string; removable?: boolean }[]
}
const TagManager = ({
  availableTags = [],
  maxTags = 10,
  selectedTags,
}: TagManagerProps) => {
  const { filteredAvailableTags, handleNewTag, handleToggleTag, error } =
    useTag({ availableTags, selectedTags })

  return (
    <div className='max-w-4xl mx-auto p-4 md:p-6'>
      <header className='mb-8'>
        <p className=' mt-2'>Add tags to your post to make it easier to find</p>
      </header>

      <Card className=' rounded-xl shadow-lg p-6 md:p-8'>
        {/*Tags Section */}
        <div className='mb-6'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-xl font-semibold text-gray-800'>Post Tags</h2>
            <span
              className={`
              text-sm font-medium px-3 py-1 rounded-full
              ${
                selectedTags.length === 0
                  ? 'bg-gray-100 text-gray-800'
                  : selectedTags.length < 3
                    ? 'bg-blue-100 text-blue-800'
                    : selectedTags.length < 6
                      ? 'bg-green-100 text-green-800'
                      : 'bg-purple-100 text-purple-800'
              }
            `}
            >
              {selectedTags.length} tag{selectedTags.length !== 1 ? 's' : ''}
            </span>
          </div>

          <p className='text-gray-600 mb-6'>
            Select existing tags or add new ones to categorize your post.
          </p>

          {/* Selected tags */}
          <div className='mb-8'>
            <h3 className='text-sm font-medium text-gray-700 mb-3'>
              Selected Tags
            </h3>
            <div className='min-h-12 p-3 border border-gray-300 rounded-lg bg-gray-50'>
              {selectedTags.length > 0 ? (
                <TagList tags={selectedTags} onToggleTag={handleToggleTag} />
              ) : (
                <p className='text-gray-500 italic'>No tags selected yet</p>
              )}
            </div>
          </div>

          {/* Available tags*/}
          <div className='mb-8'>
            <div className='flex justify-between items-center m-3'>
              <h3 className='text-sm font-medium text-gray-700 mb-3'>
                Available Tags
              </h3>
              <TagForm handleAddNewTag={handleNewTag} />
            </div>

            {filteredAvailableTags.length > 0 ? (
              <TagList
                tags={filteredAvailableTags}
                onToggleTag={handleToggleTag}
              />
            ) : (
              <p className='text-gray-500 italic'>No more tags available</p>
            )}
          </div>

          <div className='bg-blue-50 border border-blue-200 rounded-lg p-4'>
            <div className='flex'>
              <div className='shrink-0'>
                <Info className='text-blue-500 mt-0.5' size={20} />
              </div>
              <div className='ml-3'>
                <h3 className='text-sm font-medium text-blue-800'>Tag Tips</h3>
                <div className='mt-1 text-sm text-blue-700'>
                  <p>
                    Tags help your post get discovered. Use relevant tags and
                    avoid duplicates. You can add up to {maxTags} tags per post.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {error && <p className='text-red-500 mt-2'>{error}</p>}
      </Card>
    </div>
  )
}

export default TagManager
