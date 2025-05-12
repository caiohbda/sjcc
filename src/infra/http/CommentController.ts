import { Router, Request, Response } from "express";
import { PostgresCommentRepository } from "../persistence/PostgresCommentRepository";
import { CreateCommentService } from "../../application/services/CreateCommentService";
import { GetAllCommentsService } from "../../application/services/GetAllCommentsService";
import { GeminiModerationService } from "../../application/services/GeminiModerationService";

const moderationService = new GeminiModerationService(process.env.GEMINI_API_KEY!);

class CommentController {
  private repo = new PostgresCommentRepository();
  private createCommentService = new CreateCommentService(this.repo, moderationService);
  private getAllCommentsService = new GetAllCommentsService(this.repo);
  public router: Router;

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/comments", this.createComment.bind(this)); 
    this.router.get("/comments", this.getAllComments.bind(this)); 
  }

  private async createComment(req: Request, res: Response) {
    const { content, name } = req.body;
    try {
      const comment = await this.createCommentService.execute(content, name);
      res.status(201).json(comment);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

  private async getAllComments(_req: Request, res: Response) {
    const comments = await this.getAllCommentsService.execute();
    res.status(200).json(comments);
  }
}

export default new CommentController().router;
