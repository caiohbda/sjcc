export class Comment {
  public readonly id: string;
  public readonly content: string;
  public readonly name: string;
  public readonly createdAt: Date;
  public status: 'pending' | 'approved' | 'rejected';

  constructor(props: { 
    content: string; 
    name: string;
    id?: string; 
    createdAt?: Date; 
    status?: 'pending' | 'approved' | 'rejected';
  }) {

    const { content, name, id, createdAt, status } = props;

    if (!content || !content.trim()) {
      throw new Error("Comment content cannot be empty.");
    }

    if(!name || !name.trim()) {
      throw new Error("Comment must be a valid name.");
    }

    this.id = id ?? crypto.randomUUID();
    this.content = content;
    this.name = name;
    this.createdAt = createdAt ?? new Date();
    this.status = status ?? 'pending';
  }
}
