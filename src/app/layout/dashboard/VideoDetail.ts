import { NgxY2PlayerOptions } from "ngx-y2-player";

export class VideoDetail{
    Id:number;
    playerOptions?: NgxY2PlayerOptions;
    Title?: string;
    Description?:string;  
    Url?:string; 
    
    constructor()
    {
        this.playerOptions = {
            videoId: '_tAeUdIqUUc',
            width:200,                
            height:200,
            resizeDebounceTime: 0,
            playerVars: {
                autoplay: 1,
            }
        };
    }
}