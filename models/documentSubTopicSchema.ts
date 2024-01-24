import { Schema, model, Document } from 'mongoose';

export interface IDocument extends Document {
    subTopicId: number;
    totalData: DocumentPart[];
}

interface DocumentPart {
    data: string;
    dataType: string;
}

const DocumentSchema = new Schema<IDocument>({
    subTopicId: { type: Number, required: true, unique: true },

    totalData: [{
        data: { type: String, required: true },
        dataType: { type: String, required: true }
    }]
});

const DocumentModel = model<IDocument>('document', DocumentSchema);

export default DocumentModel;
