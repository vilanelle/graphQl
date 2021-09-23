import { FC } from 'react';

export const User: FC<{ user: { login: string, avatar_url: string } }> = ({ user: { login, avatar_url } }) => (
  <div className="Card">
  <div>
    <img alt="avatar" className="Card--avatar" src={avatar_url} />
<h1 className="Card--name">{login}</h1>
  </div>
  <a href={`https://github.com/${login}`} className="Card--link">
  See my profile
</a>
</div>
);
