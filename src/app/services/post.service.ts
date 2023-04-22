import { Injectable } from "@angular/core"

export class PostService{
    // // can inject this service class to any component without creating a new instance for each and every new component, so tihs is what happens behind the scenes when we create the provider
    // @Injectable({
    //     providedIn:'root',
    // })

postList:Array<any> = [{id:1,postTitle: "post 1"},
{id:1,postTitle: "post 1"},{id:1,postTitle: "post 1"},{id:1,postTitle: "post 1"},]
addPost(newPost:any){
    this.postList.push(newPost)
}


}