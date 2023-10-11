import React from 'react';
import {FaPlus} from 'react-icons/fa';
import {BsMusicNoteList,BsTrash} from 'react-icons/bs';
import {PlayList} from "./PlayList";


function MenuPlayList() {
  return (
    <div className='playlistContainer'>
        <div className="nameContainer">
            <p>PlayList</p>
            <i><FaPlus/></i>
        </div>
           <div className="playListScroll">
            {PlayList && PlayList.map((PlayList) => (
                <div className="PlayList" >
                <i className="list">
                        <BsMusicNoteList/>
                    </i>
                    <p>{PlayList.name}</p>
                    <i className="trash">
                        <BsTrash/>
                    </i>
                </div>
            ))}
            
           </div> 
       
      
    </div>
  )
}

export  {MenuPlayList};
