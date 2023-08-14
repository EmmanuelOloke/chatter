import Post from '../../../../../models/post';
import { connectToMongoDB } from '../../../../../lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, response: NextResponse) {
  if (request.method !== 'POST')
    return NextResponse.json({ error: 'Method is not allowed' }, { status: 405 });

  const body = await request.json();

  const { title, content, author, tags, coverImage, authorImage, authorProfession, timeToRead } =
    body;

  await connectToMongoDB();

  if (title.length === 0)
    return NextResponse.json({ error: 'Post must have a title' }, { status: 409 });

  if (content.length < 50)
    return NextResponse.json(
      { error: 'Post content must be at least 50 characters' },
      { status: 409 }
    );

  const post = await Post.create({ ...body });

  return NextResponse.json({
    post: {
      id: post._id.toString(),
      tile: post.title,
      content: post.content,
      author: post.author,
      tags: post.tags,
      coverImage: post.coverImage,
      authorImage: post.authorImage,
      authorProfession: post.authorProfession,
      timeToRead: post.timeToRead,
    },
  });
}

export async function GET(request: NextRequest, response: NextResponse) {
  if (request.method !== 'GET')
    return NextResponse.json({ error: 'Method is not allowed' }, { status: 405 });

  try {
    await connectToMongoDB();
    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
  }
}
