import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgxY2PlayerComponent, NgxY2PlayerOptions } from 'ngx-y2-player';
import { Video } from '../../login/youtube';
import { VideoDetail } from './VideoDetail';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    @ViewChild('video') video: NgxY2PlayerComponent;
    VideoList: VideoDetail[] = [];

    playerOptions: NgxY2PlayerOptions = {
        videoId: 'kpWHXkkFmpc',
        width:200,                
        height:200,
        resizeDebounceTime: 0,
        playerVars: {
            autoplay: 1,
        },
    };

    constructor() {
        this.VideoList = [];
        this.VideoList = [
            {
                Id: 1,               
                Description: "Video1",
                Title: 'Video1'
            },
            {
                Id: 2,               
                Description: "Video2",
                Title: 'Video2'
            },
        

        ];
        
    }

    ngOnInit() { }


}
