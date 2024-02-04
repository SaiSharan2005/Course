import { Request, Response } from 'express';
import Document, { IDocument } from "../../models/old/documentSubTopicSchema";

const addDocument = async (req: Request, res: Response): Promise<void> => {
  try {
    const document: IDocument = await Document.create(req.body);
    await document.save();
    res.send(document);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};

const getDocument = async (req: Request, res: Response): Promise<void> => {
  try {
    const document: IDocument | null = await Document.findOne(req.body);
    res.send(document);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
}; 

const getAllDocument = async (req: Request, res: Response): Promise<void> => {
  try {
    const documents: IDocument[] = await Document.find(req.body);
    res.json(documents);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
}; 

const removeDocument = async (req: Request, res: Response): Promise<void> => {
  try { 
    const result = await Document.deleteOne(req.body);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};

const removeAllDocument = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await Document.deleteMany(req.body);
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
};
const updateDocument = async (req: Request, res: Response): Promise<void> => {
    try {
      const updatedDocument: IDocument | null = await Document.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        { new: true } 
      );
  
      if (updatedDocument) {
        res.json(updatedDocument);
      } else {
        res.status(404).json({ success: false, message: 'Document not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send();
    }
  };
  

export { addDocument, getDocument,getAllDocument,removeDocument, removeAllDocument, updateDocument};
