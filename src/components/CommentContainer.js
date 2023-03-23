import React from 'react';

const commentsData =  [
    {
        name: 'Suryakanta Das',
        text:'Lorem ipsum dolor sit , constructors lap',
        replies: [
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            },
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            },
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            }

        ]
    },
    {
        name: 'Suryakanta Das',
        text:'Lorem ipsum dolor sit , constructors lap',
        replies: [
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            },
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            }
        ]
    },
    {
        name: 'Suryakanta Das',
        text:'Lorem ipsum dolor sit , constructors lap',
        replies: [
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            }
        ]
    },
    {
        name: 'Suryakanta Das',
        text:'Lorem ipsum dolor sit , constructors lap',
        replies: [
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            },
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            },
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            },
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            },
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            }
        ]
    },
    {
        name: 'Suryakanta Das',
        text:'Lorem ipsum dolor sit , constructors lap',
        replies: [
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            },
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            }
        ]
    },
    {
        name: 'Suryakanta Das',
        text:'Lorem ipsum dolor sit , constructors lap',
        replies: [
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            },
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            },
            {
                name: 'Suryakanta Das',
                text:'Lorem ipsum dolor sit , constructors lap',
                replies: [
        
                ]
            }
        ]
    }
];

const Comment  = ({data}) => {
    const {name, text, replies} = data;

    return <div className='flex shadow-lg p-2 rounded-lg bg-gray-100-100 my-2'>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" className='h-8 w-8'/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>
}

const CommentList = ({comments}) => {
    return comments.map((comment, index) => (
        <div>
            <Comment key={index} data={comment} />
            <div className='pl-5 ml-5 border-l-black'>
                <CommentList key={index} comments={comment.replies}/>
            </div>
        </div>
    ));
}

const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='font-bold text-2xl'>Comments:</h1>
        <CommentList comments={commentsData}/>
    </div>
  )
}

export default CommentContainer