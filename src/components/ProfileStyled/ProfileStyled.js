import PropTypes from 'prop-types';

import {
  Description,
  Profile,
  Avatar,
  Stats,
  LabelSpan,
  LabelQuantity,
  Name,
  Tag,
  Location,
} from './ProfileStyled.styled';

export const ProfileStyled = ({
  username,
  tag,
  location,
  avatar,
  stats,
  followers,
  views,
  likes,
}) => (
  <Profile>
    <Description>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>

    <Stats>
      <li>
        <LabelSpan>{followers}</LabelSpan>
        <LabelQuantity> {stats.followers}</LabelQuantity>
      </li>
      <li>
        <LabelSpan>{views}</LabelSpan>
        <LabelQuantity> {stats.views}</LabelQuantity>
      </li>
      <li>
        <LabelSpan>{likes}</LabelSpan>
        <LabelQuantity> {stats.likes}</LabelQuantity>
      </li>
    </Stats>
  </Profile>
);
ProfileStyled.prototype = {
  followers: PropTypes.string,
  views: PropTypes.string,
  likes: PropTypes.string,
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
