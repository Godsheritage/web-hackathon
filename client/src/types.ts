export interface contextTypes{
    majorsData:any
    courseData:any
    loading:boolean
    thread:string
    setThread:any
    sendMessage:any
    chatMessages:any
    fetchMessages:any
} 
export interface messageType {
    msg: string;
    room: string;
    senderId: string;
}
  