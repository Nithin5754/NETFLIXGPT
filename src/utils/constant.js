export  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer'+process.env.REACT_APP_OPTIONS
  }
};




export const imageUrl="https://image.tmdb.org/t/p/w500/" 


export const backGroundImage="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg";


export const language=[
  {identifiers:'en',name:'english'},
  {identifiers:'hi',name:'hindi'},
  {identifiers:'es',name:'spanish'},
  {identifiers:'ml',name:'malayalam'}
]


export const GPT_KEY=process.env.REACT_APP_GPT_KEY