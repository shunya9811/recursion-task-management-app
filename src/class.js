export class Task{
    constructor(id, title, body, editable, favorite, checked){
        this.id = id;
        this.title = title;
        this.body = body;
        this.editable = editable;
        this.favorite = favorite;
        this.checked = checked;
    }
}

export class Section{
    constructor(id, title, tasks){
        this.id = id;
        this.title = title;
        this.tasks = tasks;
    }
}