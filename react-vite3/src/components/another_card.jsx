import React from 'react'

const AnotherCard = ({username,text}) => {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://i.pinimg.com/736x/bf/b3/70/bfb370705d90dcf8288de20b49f7b4c6.jpg" alt="Sarah Dayan" width="384" height="512" />
      <figcaption className="pt-6 md:p-8 text-center md:text-left">
        <div className="text-lg font-medium">
          <blockquote>
            {text}
          </blockquote>
        </div>
        <div className="text-sky-500 dark:text-sky-400">
          {username}
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Trying To Be A developer
        </div>
      </figcaption>
    </figure>
  )
}

export default AnotherCard
