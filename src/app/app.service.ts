import { Injectable } from "@angular/core";

@Injectable()


export class AppServices
{
        folder="/assets/sound/";
        Sounds =[
                
                {id:0,
                name:"Hi-Hat\n(Foot)",
                src: this.folder+"HiHatFoot.mp3",
                points:[{pos:0,active:false},
                        {pos:1,active:true},
                        {pos:2,active:false},
                        {pos:3,active:true},
                        {pos:4,active:false},
                        {pos:5,active:true},
                        {pos:6,active:false},
                        {pos:7,active:true}]},
                {id:1,
                name:"Hi-Hat\n(open)",
                src: this.folder+"HiHatOpen.mp3",
                points:[{pos:0,active:false},
                        {pos:1,active:false},
                        {pos:2,active:false},
                        {pos:3,active:false},
                        {pos:4,active:false},
                        {pos:5,active:false},
                        {pos:6,active:false},
                        {pos:7,active:false}]},
                {id:2,
                name:"Snare",
                src: this.folder+"Snare.mp3",
                points:[{pos:0,active:false},
                        {pos:1,active:false},
                        {pos:2,active:true},
                        {pos:3,active:false},
                        {pos:4,active:false},
                        {pos:5,active:false},
                        {pos:6,active:true},
                        {pos:7,active:false}]},
                {id:3,
                name:"Bass",
                src: this.folder+"Bass.mp3",
                points:[{pos:0,active:true},
                        {pos:1,active:false},
                        {pos:2,active:false},
                        {pos:3,active:false},
                        {pos:4,active:true},
                        {pos:5,active:false},
                        {pos:6,active:false},
                        {pos:7,active:false}]},
        ];
    getSource()
    {
        return this.Sounds;
    }
}