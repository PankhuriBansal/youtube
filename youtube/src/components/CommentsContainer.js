import React from 'react'

const commentsData =  [        //comments can be multiple, so storing it inside an array using objects, array of multiple comments  
    {
        name: "Rishi",
        text: "Hi",
        replies: [                 //as replies can be multiple so we need to use an array to store it 

        ]
    },
    {
        name: "Rishi",
        text: "Hello",
        replies: [                 //as replies can be multiple so we need to use an array to store it 
            {
                // replies can also have multiple such comments so we are storing the multiple replies and comments in the form of array objects 
                name: "Pankhuri",
                text: "Hey",
                replies: [
                    {
                        // replies can also have multiple such comments so we are storing the multiple replies and comments in the form of array objects 
                        name: "Pankhuri",
                        text: "Hi",
                        replies: []
                    },
                    {
                        // replies can also have multiple such comments so we are storing the multiple replies and comments in the form of array objects 
                        name: "Pankhuri",
                        text: "Wassup",
                        replies: []
                    },
                    {
                        // replies can also have multiple such comments so we are storing the multiple replies and comments in the form of array objects 
                        name: "Rishi",
                        text: "Good",
                        replies: [
                            {
                                // replies can also have multiple such comments so we are storing the multiple replies and comments in the form of array objects 
                                name: "Pankhuri",
                                text: "What about you?",
                                replies: [
                                    {
                                        // replies can also have multiple such comments so we are storing the multiple replies and comments in the form of array objects 
                                        name: "Rishi",
                                        text: "Good",
                                        replies: []
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: "Pankhuri",
                text: "Right",
                replies: []
            },
            {
                name: "Rishi",
                text: "Correct",
                replies: []
            },
        ]
    },
    {
        name: "Akshay",
        text: "OK",
        replies: [                 //as replies can be multiple so we need to use an array to store it 

        ]
    }
]                                 

const Comment = ({data}) => {        //making an individual comment component , passing data to the comment we need to fetch 
    const {name,text,replies} = data           //extracting data from raw data 
    return   <div className='flex p-2 shadow-sm bg-gray-100 rounded-lg my-2'>
        <img className='w-10 h-10 mt-1' alt='user'
            src='https://seekicon.com/free-icon-download/user_1.svg' />
            <div className='px-3'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
    </div>
  
}

const CommentsList = ({comments}) => {        //will pass list inside it and it will render us a list of all the comments 
    return comments.map((comment, index) => (
        <div key={index}>
            <Comment  data={comment} />
             <div className='pl-5 border border-l-black ml-5'>
             <CommentsList  comments={comment.replies}/>             
                                            {/*  to get the replies*/}
              {/* //recursion of comments in the comments list to again give us the same comments */}
             </div>
        </div>
               
    ))
}

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentsList  comments={commentsData} />
    </div>
  )
}

export default CommentsContainer
