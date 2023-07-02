import React from 'react';
import PostItem from "./PostItem";

const PostList = (props) => {

	const { posts, title } = props;

	return (
		<div className="post-list">
			<h1 style={{ textAlign: 'center' }}>{ title }</h1>
			{
				posts.map((post, index) =>
					<PostItem
						number={index + 1}
						post={post}
						key={post.id}
					/>
				)
			}
		</div>
	);
};

export default PostList;