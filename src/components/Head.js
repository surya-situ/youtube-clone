import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';


const Head = () => {

  // for search bar
  const [searchQuery, setSearchQuery] = useState('');

  // to add/remove the suggestion box 
  const [showSuggestions, setShowSuggestions] = useState(false);

  // search box suggestions
  const [suggestions, setSuggestions] = useState([]);

  // from store and searchSlice:
  const searchCache = useSelector(store => store.search )

  //for both toggle menu and update cache result:
  const dispatch = useDispatch();


  useEffect(() => {

    //API call
    const timer = setTimeout(() => { 
      // this logic is: {if the data is in cache then don't call the api if it is not available in the cache then call the api:}
      /**
       *? Something wrong with this logic
        //   if(searchCache[searchQuery]) {
        //     setShowSuggestions(searchCache[searchQuery])
        //   } else {
        //     getSearchSuggestions()
        //   } 
        // }, 200);
       
      */

    getSearchSuggestions()
      
    }, 200);
      

    return () => {
      clearTimeout(timer);
    }

  })

  // search api
  const getSearchSuggestions = async () => {
    let data = await fetch(YOUTUBE_SEARCH_API + searchQuery )
    let result = await data.json();
    // console.log(result);
    
    //result[1] because in the api the suggestion list comes in the [1] index;
    setSuggestions(result[1]);

    //updating the cache:
    dispatch(cacheResults({
      [searchQuery] : result[1]
    }))
  }

  /*toggling the side bar*/
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col p-5 shadow-lg'>

        <div className='flex items-center col-span-1 gap-5'>

            <img 
              onClick={() => toggleMenuHandler()} 
              src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png" 
              alt="menu" 
              className='h-5 cursor-pointer'/>

            <a href="/">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png" 
                alt="youtube logo"  
                className='h-8'/>
            </a>
        </div>

        <div className='col-span-10 px-10'>
          <div>
            <input 
              className='w-1/2 border border-gray-400 p-2 rounded-l-full' 
              type="text" 
              value={searchQuery}
              onChange = {(e) => setSearchQuery(e.target.value)}
              onFocus ={() => setShowSuggestions(true)}
              onBlur ={() => setShowSuggestions(false)}
            />
            <button className='border border-grey-400 px-4 py-2 rounded-r-full bg-slate-200'>
              🔍
            </button>
            </div>

            {
              showSuggestions && (
                <div className='fixed border border-gray-100 bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg'>
                  <ul>
                    {
                      suggestions.map((s) => (
    
                        <li key={s}  className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>
    
                      ))
                    }
                  </ul>
               </div>
              )
            }
            
        </div>

       
        
        <div className='col-span-1'>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
              alt="user icon" 
              className='h-8' 
            />
        </div>
    </div>
  )
}

export default Head