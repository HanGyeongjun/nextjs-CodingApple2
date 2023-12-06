export default async function handler(request, respond){
    return respond.status(200).json(new Date())
}