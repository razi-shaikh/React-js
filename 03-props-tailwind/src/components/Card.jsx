import React from 'react'
// https://source.unsplash.com/weekly?fire
function Card({userName='Default Name', bio}){{/* Default Value */}
    return (
        <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://source.unsplash.com/weekly?fire"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md  object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{userName}</h1>
          <p className="mt-2 text-sm text-gray-300">{bio || 'Default Value of Bio'}</p>{/* Default Value */}
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-black">
            View Profile &rarr;
          </button>
        </div>
      </div>
    )
}

export default Card