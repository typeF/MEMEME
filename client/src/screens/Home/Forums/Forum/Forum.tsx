import React, { Fragment } from 'react';

const Forum = ({ forum }: { forum: any }) => {
  const { name, title, content, author, createdAt } = forum;

  return (
    <Fragment>
      <div>
        <span>{name}</span>
        <div>
          <img src={content} />
        </div>
        <span>[{author}]&nbsp;{title}</span>
      </div>
    </Fragment>
  )
}

export default Forum;