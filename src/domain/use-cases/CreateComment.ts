import { Comment } from "../entities/Comment";
import { CommentRepository } from "../repositories/CommentRepository";

export class CreateComment {
  constructor(private readonly repo: CommentRepository) {}

  async execute(name:string, content: string): Promise<Comment> {
    const comment = new Comment({ name, content });
    await this.repo.save(comment);
    return comment;
  }
}
