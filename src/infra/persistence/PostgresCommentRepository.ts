import { Comment } from "../../domain/entities/Comment";
import { CommentRepository } from "../../domain/repositories/CommentRepository";
import client from "../database/PostgresClient";

export class PostgresCommentRepository implements CommentRepository {
  async save(comment: Comment): Promise<Comment> {
    const result = await client.query(
      'INSERT INTO comments (id, name, content, created_at, status) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [comment.id, comment.name, comment.content, comment.createdAt, comment.status]
    );
    return result.rows[0];
  }

  async findAll(): Promise<Comment[]> {
    const result = await client.query('SELECT * FROM comments');
    return result.rows.map((row: any) => {
      return new Comment({
        id: row.id,
        name: row.name,
        content: row.content,
        createdAt: row.created_at,
        status: row.status,
      });
    });
  }
}