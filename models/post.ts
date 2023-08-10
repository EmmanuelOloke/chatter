import { Model, Schema, model, models } from 'mongoose';
import { Document } from 'mongoose';

interface PostDocument extends Document {
  title: string;
  content: string;
  author: string;
  datePosted: Date;
  tags: string[];
  comments: {}[];
  likes: number;
  views: number;
  coverImage: string;
  authorImage: string;
  authorProfession: string;
  timeToRead: string;
}

const PostSchema = new Schema<PostDocument>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  datePosted: {
    type: Date,
    default: Date.now(),
  },
  tags: {
    type: [String],
    required: true,
  },
  comments: [
    {
      user: {
        type: String,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      datePosted: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
  likes: {
    type: Number,
    default: 0,
  },
  views: {
    type: Number,
    default: 0,
  },
  coverImage: {
    type: String,
    required: true,
  },
  authorImage: {
    type: String,
    required: true,
  },
  authorProfession: {
    type: String,
    required: true,
  },
  timeToRead: {
    type: String,
    required: true,
  },
});

const Post = models.Post || model('Post', PostSchema);

export default Post as Model<PostDocument>;
