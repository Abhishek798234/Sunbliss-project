import clientPromise from './mongodb';

export interface InquiryData {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  contact: string;
  preferredContact: string;
  agreeToPolicy: boolean;
  createdAt: Date;
}

export async function saveInquiry(data: Omit<InquiryData, 'createdAt'>) {
  try {
    const client = await clientPromise;
    const db = client.db('sunbliss');
    const collection = db.collection('inquiries');
    
    const inquiry: InquiryData = {
      ...data,
      createdAt: new Date()
    };
    
    const result = await collection.insertOne(inquiry);
    return { success: true, id: result.insertedId };
  } catch (error) {
    console.error('Error saving inquiry:', error);
    return { success: false, error: 'Failed to save inquiry' };
  }
}